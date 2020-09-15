const mongoose = require('mongoose');
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 150
    },
    sex: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    direction: [String],
    class: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;