const mongoose = require('mongoose');
const db = require('../config/db')
const User = require('../models/userModel')

const cartSchema = new mongoose.Schema({

    productId: {

    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        max: 5
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true
    },
});

const productCart = db.model('cart', cartSchema)

module.exports = productCart
