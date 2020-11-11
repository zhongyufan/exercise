const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const config = require('./config'); // 导入配置文件

// redis配置
const redis = require('redis');
const session = require('express-session');
// const redisConfig = {
//     redis_port: '6479',
//     redis_host: '10.0.0.121',
//     redis_db: '2',
//     redis_password: '19971212',
// };
// 查redis
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient({
    port: config.redis_port,
    host: config.redis_host,
    db: config.redis_db,
    password: config.redis_password,
});

app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        secret: 'keyboard cat',
        resave: false,
    })
)

let num = 0; // 连接数

console.log('socket服务器启动中');
// 启动服务
io.on('connect', socket => {
    console.log('socket服务器启动成功');
    let tenantId = null; // 租户ID
    let userId = null; // 用户ID
    let msgNum = null; // 新消息数量
    let time = null; // 计时器
    num++;
    console.log('socket连接数：', num);
    socket.emit('connection', { msg: '服务器连接成功...', noRead: 0 });
    // 获取前端发送的用户数据
    socket.on('userInfo', (data) => {
        tenantId = data.tenantId;
        userId = data.userId;
        getNewMsg(socket);
    });
    time = setInterval(() => {
        getNewMsg(socket);
        console.log(process.env.NODE_APP_INSTANCE + ':' + num + ':' + userId + ':' + msgNum);
    }, 1000);
    socket.on('disconnect', () => {
        num--;
        clearInterval(time);
        console.log('服务断开，当前socket连接数：', num);
    })

    // 查询 redis 数据
    function getNewMsg(socket) {
        if (tenantId == null) {
            socket.emit('customError', { state: 4, msg: 'tenantId不能为空', data: {} });
            return;
        }
        if (userId == null) {
            socket.emit('customError', { state: 4, msg: 'userId不能为空', data: {} });
            return;
        }
        redisClient.get(`${tenantId}:AMS_NOTICE_MESSAGE_VALUE:${userId}`, (err, reply) => {
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
server.listen(config.port);

console.log('服务器启动成功');

/**
 * @param {2-成功 4-错误} state
 *
 */