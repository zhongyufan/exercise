const express = require('express');
const app = express();

// 创建路由对象
const home = express.Router();
// 匹配路由对象
app.use('/home', home);
// 在home路由下继续创建路由
home.get('/index', (req, res) => {
    res.send('欢迎来到首页');
});
app.listen(3000);