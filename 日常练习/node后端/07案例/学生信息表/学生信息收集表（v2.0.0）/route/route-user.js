const express = require('express');
const user = express.Router();

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
user.use(bodyParser.urlencoded({
    extended: false
}))
// post解析json
user.use(bodyParser.json());


//设置根目录
let root = path.resolve(__dirname, '..');

// ----------- 展示页面 -------------
// 用户列表
user.get('/list', async (req, res) => {
    res.sendFile(path.join(root, 'views', 'user', 'list.html'));
})
// 添加用户
user.get('/add', (req, res) => {
    res.sendFile(path.join(root, 'views', 'user', 'add.html'));
})
// 登陆页
user.get('/login', (req, res) => {
    res.sendFile(path.join(root, 'views', 'user', 'login.html'));
})
// 个人信息
user.get('/info', (req, res) => {
    res.sendFile(path.join(root, 'views', 'user', 'info.html'));
})

// ----------- 请求数据 -------------
// 获取用户信息
user.get('/info', (req, res) => {
    res.send(req.session.username);
})

// 用户列表数据
user.get('/userList', (req, res) => {
    us.find().then((result) => {
        res.send({
            result: result,
            userInfo: {
                id: req.session.userid,
                name: req.session.name,
                image: req.session.image
            }
        });
    }).catch((err) => {
        console.log('查询失败' + err);
    });
})
// 数据库添加用户
user.post('/addUserInfo', async (req, res) => {
    let { username, email, password, role } = req.body;
    // 用户转换
    if (role == "普通用户") {
        role = 'normal'
    } else if (role == "超级管理员") {
        role = 'admin'
    }
    let pass = '';
    await bcrypt.hash(password, saltRounds)
        .then((res) => {
            pass = res
        })
        .catch((err) => {
            console.log('密码加密错误----' + err);
        });
    await us.create({
        username: username,
        email: email,
        password: pass,
        role: role
    });
    res.redirect(301, '/user/list');
})

// 状态更改
user.get('/stateChange', async (req, res) => {
    let id = req.query.id;
    let state = req.query.state;
    console.log(state);
    state == "true" ? state = false : state = true;
    await us.findByIdAndUpdate({
        _id: id
    }, {
        state: state
    })
    res.send('ok');
});

module.exports = user;
