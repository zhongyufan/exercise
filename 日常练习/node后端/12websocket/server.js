const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// 查redis
const redis = require('redis');
const session = require('express-session');
const redisConfig = {
    redis_port: '6479',
    redis_host: '10.0.0.121',
    redis_db: '2',
    redis_password: '19971212',
};
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient({
    port: redisConfig.redis_port,
    host: redisConfig.redis_host,
    db: redisConfig.redis_db,
    password: redisConfig.redis_password,
});

app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        secret: 'keyboard cat',
        resave: false,
    })
)

let num = 0;

redisClient.lrange('NOTICE_MSG:1:1', 0, -1, (err, reply) => {
    console.log(reply);
});

// 启动服务
io.on('connect', socket => {
    num++;
    console.log('连接数：', num);
    socket.emit('connection', { msg: '服务器连接成功...', noRead: 0 });
    let msgNum = 0;
    let variety = false;
    setInterval(() => {
        redisClient.get('message', (err, reply) => {
            if (msgNum != reply) {
                msgNum = reply;
                variety = true;
            }
        });
        if (variety) {
            variety = false;
            socket.emit('count', { state: 1, noRead: msgNum });
        } else {
            socket.emit('count', { state: 0, noRead: msgNum });
        }
    }, 1000);
    socket.on('disconnect', () => {
        num--;
        console.log('服务断开，当前连接数：', num);
    })
});
server.listen(3000);

console.log('服务器启动成功');