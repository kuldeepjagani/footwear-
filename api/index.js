const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
const multer = require('multer')

const path = require("path")

const app = express()

dotenv.config()
app.use(express.json());
app.use(cors())



app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);


// upload image
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.name}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({ storage: storage });

app.post('/api/admin/addproduct', upload.single('profile'), async (req, res) => {
    try {
        const { name, category, description, price, quantity } = req.body;
        console.log(req.body)
        console.log(req.file)
        const image = req.file.path; // Assuming multer has stored the file path in req.file.path

        const product = new Product({ name, category, description, price, quantity, image });
        await product.save();

        res.status(201).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
})


// port
const port = process.env.PORT || 3000;

// Listen
app.listen(port, () => {
    console.log(`server Running on ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`)
})