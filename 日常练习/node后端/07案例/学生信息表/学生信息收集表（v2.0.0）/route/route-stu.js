const express = require('express');
// 路由
const stu = express.Router();

const path = require('path');
// 数据库
const student = require('../model/student');
// POST
const bodyParser = require('body-parser');

// post管理
stu.use(bodyParser.urlencoded({
    extended: false
}))

//设置根目录
let root = path.resolve(__dirname, '..');

// ----------- 展示页面 -------------
// 默认首页
stu.get('/', (req, res) => {
    res.sendFile(path.join(root, 'views', 'student', 'list.html'));
})
// 列表展示页
stu.get('/list', (req, res) => {
    res.sendFile(path.join(root, 'views', 'student', 'list.html'));
})
// 添加页
stu.get('/add', (req, res) => {
    res.sendFile(path.join(root, 'views', 'student', 'add.html'));
})
// 更新页
stu.get('/updata', (req, res) => {
    res.sendFile(path.join(root, 'views', 'student', 'updata.html'));
})

// ----------- 请求数据 -------------
// 获取列表数据
stu.get('/listresult', (req, res) => {
    student.find().then((result) => {
        res.send({
            result: result,
            userInfo: {
                id: req.session.userid,
                name: req.session.name,
                image: req.session.image,
                role: req.session.role
            }
        });
    }).catch((err) => {
        console.log('查询失败' + err);
    });
})

// 更新获取数据
stu.get('/updataresult', (req, res) => {
    // 获取当前id
    let id = req.query.id;
    student.findOne({
        _id: id
    }).then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log('查询失败' + err);
    });
});

// 添加
stu.post('/addStuInfo', async (req, res) => {
    await student.create(req.body);
    res.redirect(301, '/stu/list');
})
// 修改
stu.post('/updataStuInfo', async (req, res) => {
    let id = req.query.id;
    await student.updateMany({
        _id: id
    }, req.body);
    res.redirect(301, '/stu/list');
})
//删除
stu.get('/deleteInfo', async (req, res) => {
    let id = req.query.id;
    await student.findOneAndDelete({
        _id: id
    });
    res.redirect(301, '/stu/list');
})

// 到处路由对象
module.exports = stu;