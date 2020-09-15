const express = require('express');
// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
    // send()
    res.send('hello world');
})
app.get('/list', (req, res) => {
    res.send({
        name: 'zhongyufan',
        age: 22
    })
})

app.listen(3000);
console.log('服务器启动成功');