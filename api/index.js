const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const productRoute = require('./routes/productRoute')
const cookieParser = require('cookie-parser')
const orderRoute = require('./routes/orderRoute')
const path = require('path')

const app = express()
app.use(cors());

dotenv.config()
app.use(express.json());
app.use(cookieParser())
app.use(express.static("public"));

// Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Uncaught Exception`);
//     process.exit(1);
// });


app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
// console.log("index")

// port
const port = process.env.PORT || 3000;

// Listen
app.listen(port, () => {
    console.log(`server Running on ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`)
})


// Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//     server.close(() => {
//         process.exit(1);
//     });
// });