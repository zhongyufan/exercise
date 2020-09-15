const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/code', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err, '数据库连接失败');
    });

// 创建用户集合规则
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// 创建文章集合规则
const postScheme = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        // 根据id进行关联
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// 使用规则
// 用户集合
const User = mongoose.model('User', userScheme);
// 文章集合
const Post = mongoose.model('Post', postScheme);

// 创建用户
// User.create({
//     name: "zhongf"
// }).then(res => {
//     console.log(res)
// });
// 创建文章
// Post.create({
//     title: '我告诉你',
//     author: '5eb2c8f8776a6e21d8df948a'
// })

Post.find().populate('author').then(res => console.log(res))