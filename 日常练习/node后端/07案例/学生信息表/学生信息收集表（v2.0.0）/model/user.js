const mongoose = require('mongoose');
// 创建集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址不重复
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // admin超管 normal普户
    role: {
        type: String,
        required: true
    },
    // true 启用 false禁用
    state: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        default: ''
    }
});
// 创建集合规则
const User = mongoose.model('User', userSchema);

module.exports = User;