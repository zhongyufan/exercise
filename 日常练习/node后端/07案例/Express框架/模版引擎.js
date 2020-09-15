const express = require('express');
const path = require('path');
const app = express();

// 指定模版引擎渲染模版文件
app.engine('art', require('express-art-template'));
// 指定模版存放位置
app.set('view', path.join(__dirname, 'view'));
// 指定模版默认后缀
app.set('view engine', 'art');

app.get('/index', (req, res) => {
    // render做了什么？
    // 1、拼接模版路径
    // 2、拼接模版后缀
    // 3、模版与对应数据拼接
    // 4、结果响应给客户端
    res.render('index', {
        msg: 'message'
    })
})

app.listen(3000);
console.log('服务器已启动');