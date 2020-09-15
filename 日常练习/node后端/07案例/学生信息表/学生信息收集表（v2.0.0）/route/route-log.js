const express = require('express');
const log = express.Router();

// 数据源
const us = require('../model/user');

// post
const bodyParser = require('body-parser');

// 路径
const path = require('path');

// 用户密码加密
const bcrypt = require('bcrypt');
// 混淆长度
const saltRounds = 10;

// post管理
log.use(bodyParser.urlencoded({
    extended: false
}))
// post解析json
log.use(bodyParser.json());


//设置根目录
let root = path.resolve(__dirname, '..');

// ----------- 展示页面 -------------
// 登陆页
log.get('/login', (req, res) => {
    res.sendFile(path.join(root, 'views', 'log', 'login.html'));
})

// ----------- 请求数据 -------------
// 登陆检测
log.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let userInfo = await us.findOne({ email });
    if (userInfo) {
        let compare = Boolean;
        await bcrypt.compare(password, userInfo.password)
            .then((res) => {
                compare = res;
            })
            .catch((err) => {
                compare = false;
                console.log('密码比对错误----' + err);
            });
        if (compare && userInfo.state) {
            // 记录已登陆用户信息(id 用户名 头像)
            req.session.userid = userInfo._id;
            req.session.name = userInfo.username;
            req.session.image = userInfo.image;
            req.session.role = userInfo.role;
            res.send({ state: 1, msg: '登陆成功' });
        } else if (compare) {
            res.send({ state: 2, msg: '账户已禁用' });
        }
        else {
            res.send({ state: 3, msg: '密码错误' });
        }
    } else {
        res.send({ state: 4, msg: '该邮箱尚未注册' });
    }
})
// 退出登陆
log.get('/logout', (req, res) => {
    // 删除session
    req.session.destroy(function () {
        // 删除cookie
        res.clearCookie('connect.sid');
        // 重定向
        res.redirect(301, '/log/login');
    })
})

module.exports = log;
