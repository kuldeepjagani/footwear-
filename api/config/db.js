const mongoose = require('mongoose');

const connecitonString = 'mongodb://127.0.0.1:27017/footwear';

const connectDB = mongoose
    .createConnection(connecitonString)
    .on('open', () => {
        console.log('Connected to MongoDB Local');
    })
    .on('error', () => {
        console.log('MongoDB Error!');
    });

module.exports = connectDB;