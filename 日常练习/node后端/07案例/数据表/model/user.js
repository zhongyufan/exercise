const mongoose = require('mongoose');
// 创建用户集合规则
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
})

// 使用集合规则
const User = new mongoose.model('User', UserSchema);

module.exports = User;