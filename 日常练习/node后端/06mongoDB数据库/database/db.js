const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err, '数据库连接失败');
    });

// 创建集合规则
const courseScheme = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
// 使用规则
const Course = mongoose.model('Course', courseScheme);

// 创建文档方式一：
// 1、对应规则的数据
const course = new Course({
    name: 'mongoDB',
    author: 'zhongyufan',
    isPublished: true
})
// 2、插入数据
course.save();

// 创建文档方式二：
Course.create({
    name: "node.js",
    author: 'hahahaha',
    isPublished: false
}, (err, doc) => {
    console.log(err);
    console.log(doc);
})
// 返回promise对象
Course.create({
    name: "app",
    author: 'lalala',
    isPublished: false
}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})