const mongoose = require('mongoose');
const db = require('../config/db')


const categorySchema = new mongoose.Schema({
    name: String,
});


const userModel = db.model('category', categorySchema)

module.exports = userModel