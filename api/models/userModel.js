const mongoose = require('mongoose');
const db = require('../config/db')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "name is require"]
    },
    email: {
        type: String,
        required: [true, "email is require"]
    },
    password: {
        type: String,
        required: [true, "password is require"]
    }
})


const userModel = db.model('users', userSchema)

module.exports = userModel