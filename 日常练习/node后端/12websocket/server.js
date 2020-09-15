const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.send('<h1>Web通讯</h1>');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    // console.log(socket);
    socket.on('disconnect', () => {
        console.log('连接成功');
    });
});

http.listen(3000);

// app.get('/', (req, res) => {
//     res.send('hello,world!')
// });

// app.listen(80);

console.log('服务器启动成功');