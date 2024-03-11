const Order = require("../models/orderModel");
const Product = require('../models/product');
const ApiFeatures = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorhander');
const catchAsyncErors = require('../middleware/catchAsyncErrors')


const newOrder = async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    const order = await Order.create({
        shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        // user: req.user._id
    });

    res.status(201).json({
        success: true,
        order
    })
}

const getSingleOrder = async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );

    if (!order) {
        return res.status(404).json({
            success: flase,
            message: "Order not found with Id"
        })
    }

    res.status(200).json({
        success: true,
        order
    })
}

const myOrder = async () => {
    const orders = await Order.find({ user: req.user._id })

    res.status(200).json({
        success: true,
        orders
    })

}

const getAllOrder = async (req, res, next) => {
    const orders = await Order.find()

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
}

const updateOrder = async (req, res, next) => {
    const order = await Order.find(req.params.id);

    if (order.orderStatu === "Delivered") {
        return res.status(400).json({
            success: false,
            message: "You have already deliverd this order"
        })
    }
    order.orderItem.forEach(async (order) => {
        await updateStock(order.Product, order.quantity);

    })

    order.orderStatu = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }
    await order.save({ validateBeforSave: false })

    res.status(200).json({
        success: true
    })
}
async function updateStock(id, quantity) {
    const product = await Product.findById(id)

    product.stock -= quantity;

    product.save({ validateBeforeSave: false })
}

const deleteOrder = async (req, res, next) => {
    const order = await Order.find(req.params.id)

    await order.deleteOne()

    res.status(200).json({
        success: true
    })
}

module.exports = { newOrder, getSingleOrder, myOrder, getAllOrder, updateOrder, deleteOrder }