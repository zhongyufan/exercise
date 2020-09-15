const express = require('express');
const fs = require('fs');

const app = express();
app.get('/index', (req, res, next) => {
    fs.readFile('./app1.js', 'utf-8', (err, result) => {
        if (err != null) {
            next(err);
        } else {
            res.send(result);
        }
    })
})
// 错误处理中间件
app.use((err, req, res, nex) => {
    res.status(500).send(err.message);
})
app.listen(3000);