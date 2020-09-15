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

// find 返回查询集合中所有文档数组
// User.find().then(result => console.log(result));

// 带条件查询
// User.find({
//     _id: '5c09f236aeb04b22f8460967'
// }).then(result => console.log(result));

// findOne 返回第一条文档对象 默认第一条
// User.findOne({
//     name: '李四'
// }).then(result => console.log(result));

// 匹配$gt大于 $lt小于
// User.find({
//     age: {
//         $gt: 20,
//         $lt: 40
//     }
// }).then(result => console.log(result));

// 匹配包含 $in
// User.find({
//     hobbies: {
//         $in: ['足球']
//     }
// }).then(result => console.log(result));

// 查询字段 -xxx不要查询的字段
// User.find().select('name age -_id').then(result => console.log(result));

// 排序 sort(+)升序 sort(-)降序
// User.find().sort('age').then(result => console.log(result));
// User.find().sort('-age').then(result => console.log(result));

// 跳过数据 skip 限制查询数量 limit
// User.find().skip(2).limit(2).then(result => console.log(result));