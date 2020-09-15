const express = require('express');
const app = express();
app.get('/index/:id', (req, res) => {
    res.send(req.params);
})
app.listen(3000);
console.log('服务器已启动');

// 通过 http://localhost:3000/index/123 获取