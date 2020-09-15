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
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
})
// 使用规则
const User = mongoose.model('User', courseScheme);

// 查找一条文档并删除
// 返回删除的文档
// User.findOneAndDelete({
//     _id: ''
// }).then(result => console.log(result));

// 删除多个文档
// 返回对象
// User.deleteMany({
//     _id: ''
// }).then(result => console.log(result));