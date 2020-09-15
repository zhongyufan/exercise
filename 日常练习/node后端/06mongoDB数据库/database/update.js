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

// 更新单个
// User.updateOne({
//     name: '李四'
// }, {
//     name: '李妈妈'
// }).then(result => console.log(result));

// 更新多个
// User.({}, {
//     age: 9999
// }).then(result => console.log(result));