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

let num = 0; // 连接数

// 启动服务
io.on('connect', socket => {
    let tenandId = null; // 租户ID
    let userId = null; // 用户ID
    let msgNum = null; // 新消息数量
    let time = null; // 计时器
    num++;
    console.log('连接数：', num);
    socket.emit('connection', { msg: '服务器连接成功...', noRead: 0 });
    // 获取前端发送的用户数据
    socket.on('userInfo', (data) => {
        tenandId = data.tenandId;
        userId = data.userId;
        getNewMsg(socket);
    });
    time = setInterval(() => {
        getNewMsg(socket);
        console.log(msgNum)
    }, 1000);
    socket.on('disconnect', () => {
        num--;
        clearInterval(time);
        console.log('服务断开，当前连接数：', num);
    })
    // 查询 redis 数据
    function getNewMsg(socket) {
        if (tenandId == null) {
            socket.emit('customError', { state: 4, msg: 'tenandId不能为空', data: {} });
            return;
        }
        if (userId == null) {
            socket.emit('customError', { state: 4, msg: 'userId不能为空', data: {} });
            return;
        }
        redisClient.get(`${tenandId}:AMS_NOTICE_MESSAGE_VALUE:${userId}`, (err, reply) => {
            if (err) {
                socket.emit('customError', { state: 4, msg: 'Redis查询出错', data: err });
                return;
            }
            if (msgNum === reply) return;
            msgNum = reply;
            socket.emit('findMessage', { state: 2, msg: 'Redis查询成功', data: { msgNum: reply } });
        });
    };
});
server.listen(3000);


console.log('服务器启动成功');

/**
 * @param {2-成功 4-错误} state
 *
 */