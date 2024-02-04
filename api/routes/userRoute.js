const express = require('express')
const { registerController } = require("../controller/userCtrl")

const router = express.Router();


// --------   User Route ----------------------
router.post('/register', registerController)
// router.get("/login", loginController)




module.exports = router