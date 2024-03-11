const express = require("express");
const { newOrder, getSingleOrder, myOrder, updateOrder, getAllOrder, deleteOrder } = require("../controller/orderController");
const router = express.Router()

router.post('/neworder', newOrder)
router.get("/order/:id", getSingleOrder);
router.get('/order/me', myOrder)
router.get('/admin/order', getAllOrder)
router.put('/update/order/:id', updateOrder)
router.put('/update/order/:id', deleteOrder)


module.exports = router