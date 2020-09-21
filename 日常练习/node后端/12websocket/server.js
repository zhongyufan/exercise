const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
let num = 0;

// 启动服务
io.on('connect', socket => {
    num++;
    console.log('连接数：', num);
    socket.emit('connection', { msg: '服务器连接成功...', noRead: 0 });
    let count = 0;
    setInterval(() => {
        socket.emit('count', { state: 1, noRead: ++count });
    }, 3000);
    socket.on('disconnect', () => {
        num--;
        console.log('服务断开，当前连接数：', num);
    })
});
server.listen(3000);

console.log('服务器启动成功');