const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('数据连接成功');
}).catch((err) => {
    console.log(err);
});