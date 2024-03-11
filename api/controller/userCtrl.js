const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Product = require('../models/product')
const ErrorHandler = require("../utils/errorhander")
const catchAsyncErors = require("../middleware/catchAsyncErrors")
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")

const registerController = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // const salt = await bcrypt.genSalt(10);

        // const hashepassword = await bcrypt.hash(password, salt);

        // Create a new user

        const newUser = new userModel({ username, email, password });
        await newUser.save();
        // console.log(req.body)


        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })

        if (!user) {
            return res.status(200).send({ message: 'User Not Found', success: false });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(200).send({ message: 'Invalid Email and password', success: false })
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' })
        // sendToken(user, 200, res);
        res.status(200).send({ message: 'Login success', success: true, token, user })

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: `Error in Login Form ${error.message}` })
    }
}

const logoutController = async (req, res, next) => {
    req.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}

const forgotPassword = async (req, res, next) => {

    const user = await userModel.findOne({ email: req.body.email })

    if (!user) {
        return next(" ")
    }

    // getresetPassword token

    const resetToken = user.getResetPasswordToken()
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, Please ignore it`

    try {

        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false })

        return res.status(500).json({
            success: flase,
            error
        })
    }

}

const resetPassword = async (req, res, next) => {

    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await userModel.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })
    if (!user) {
        return res.status(404).json({
            success: flase,
            message: "Reset password Token is invalid or has been expired"
        })
    }

    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password does not password"
        })
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({
        success: true,
        user
    })

}

const getUserDetails = async (req, res, next) => {

    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
}


const updatePassword = async () => {
    const user = await userModel.findById(req.user.id);

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return res.status(400).json({
            success: false,
            message: "Old Password is incorrect"
        })
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Password does not match"
        })
    }
    user.password = req.body.newPassword;
    await user.save()

    res.status(200).json({
        success: true,
        user
    })
}

const updateProfile = async (req, res) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    const user = userModel.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
}

module.exports = { logoutController, registerController, loginController, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile }