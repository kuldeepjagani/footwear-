const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')
// const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    // const { username, email, password } = req.body;
    // try {
    //     const exisitingUser = await userModel.findOne({ email: email })
    //     if (exisitingUser) {
    //         return res.status(200).send({ message: 'User Already Exist', success: false })
    //     }

    //     const salt = await bcrypt.genSalt(10);

    //     const hashepassword = await bcrypt.hash(password, salt);
    //     console.log(req.body)
    //     const newUser = new userModel({
    //         username,
    //         email,
    //         password: hashepassword
    //     })
    //     console.log(req.body)


    //     await newUser.save()
    //     res.status(201).send({ message: "Register Successfull", success: true })



    // } catch (err) {
    //     console.error(err.message);
    //     res.status(500).send('server error')
    // }

    const { username, email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        const salt = await bcrypt.genSalt(10);

        const hashepassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({ username, email, password: hashepassword });
        await newUser.save();
        console.log(req.body)

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

// const loginController = async (req, res) => {
//     try {
//         const user = await userModel.findOne({ email: req.body.email })

//         if (!user) {
//             return res.status(200).send({ message: 'User Not Found', success: false });
//         }

//         const isMatch = await bcrypt.compare(req.body.password, user.password)
//         if (!isMatch) {
//             return res.status(200).send({ message: 'Invalid Email and password', success: flase })
//         }

//         // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

//         res.status(200).send({ message: 'Login Success', success: true })

//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ message: `Error in Login Form ${error.message}` })
//     }
// }

module.exports = { registerController }