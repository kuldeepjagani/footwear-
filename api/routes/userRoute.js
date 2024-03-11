const express = require('express')
const { registerController, loginController, logoutController, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile } = require("../controller/userCtrl")

const router = express.Router();


// --------   User Route ----------------------
router.post('/register', registerController)
router.post("/login", loginController)
router.get("/logout", logoutController)
router.post("/password/forgote", forgotPassword)
router.post("/password/reset/:token").put(resetPassword)
router.post("/me").get(getUserDetails)
router.post("/password/update").put(updatePassword)
router.post("/me/update").put(updateProfile)

module.exports = router