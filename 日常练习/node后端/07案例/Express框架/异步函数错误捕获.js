const express = require('express');
const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

const app = express();
app.get('/index', async (req, res, next) => {
    try {
        await readFile('./app.js');
        res.send('读取成功');
    } catch (ex) {
        next(ex);
    }
})
// 错误处理中间件
app.use((err, req, res, nex) => {
    res.status(500).send(err.message);
})
app.listen(3000);