const mongoose = require('mongoose');
const mongodbAdd = require('../config');

mongoose.connect('mongodb://' + mongodbAdd, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('数据库连接成功');
    }).catch((err) => {
        console.log('数据库连接错误' + err);
    });