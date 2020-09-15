const express = require('express');
const path = require('path');
// 用户认证
const session = require('express-session');

// 连接数据库
require('./model/connect');

// 开启服务
const app = express();

// 引入路由
const logR = require('./route/route-log');
const stuR = require('./route/route-stu');
const userR = require('./route/route-user');

// 静态资源管理
app.use(express.static(path.join(__dirname, 'public')));
// session
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// 路由拦截
app.use('/', async (req, res, next) => {
    // 未登陆 / 访问非登陆页
    if (await req.url != '/log/login' && !req.session.userid) {
        res.redirect(301, '/log/login');
    }
    next();
})
app.use('/user', async (req, res, next) => {
    // 非管理员禁止访问
    if (await req.session.role != "admin") {
        res.redirect(301, '/stu');
    }
    next();
})

// 使用路由
app.use('/log', logR);
app.use('/stu', stuR);
app.use('/user', userR);

app.listen('80');
console.log('服务器已启动');