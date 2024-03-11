const Product = require('../models/product')
const ApiFeatures = require('../utils/apifeatures')

const addProductController = async (req, res) => {
    try {
        // const { name, category, description, price, quantity } = req.body;

        const image = req.file.filename; // Assuming multer has stored the file path in req.file.path
        // req.body.category = "test";
        Product.create({ ...req.body, image });

        return res.status(201).json({ success: true, Product });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    // const product = await Product.create(req.body)

    try {
        const resultpage = 5
        const productCount = await Product.countDocuments()
        const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination()
        // const product = await Product.find();
        const product = await apiFeature.query;
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching All Product' });
    }
}


const getproductDetails = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404))
        }

        res.status(200).json({
            success: true,
            product,
            productCount
        })
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Product Details' });
    }

}

const updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,

    });

    res.status(200).json({
        success: true,
        message: "Product Update SuccessFully",
        product
    })

}


const deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    } else {
        await product.deleteOne()

        res.status(200).json({
            success: true,
            message: "Product Delete successfully"
        })
    }
}


module.exports = { getproductDetails, addProductController, updateProduct, deleteProduct, getAllProducts }