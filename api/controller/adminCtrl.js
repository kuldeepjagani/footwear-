const Category = require('../models/categoty')
const Product = require('../models/product')

const GetcategoriesController = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
}
const AddcategoriesController = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error adding category' });
    }
}
const EditcategoriesController = async (req, res) => {
    const { name } = req.body
    console.log(name)
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Error editing category' });
    }
}
const DeletecategoriesController = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting category' });
    }
}


// const addProductController = async (req, res) => {
//     // console.log(req.body)
//     try {
//         const { name, category, description, price, quantity } = req.body;
//         console.log(req.body)
//         console.log(req.file)
//         const image = req.file.path; // Assuming multer has stored the file path in req.file.path

//         const product = new Product({ name, category, description, price, quantity, image });
//         await product.save();

//         res.status(201).json({ success: true, product });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// }


module.exports = { GetcategoriesController, AddcategoriesController, EditcategoriesController, DeletecategoriesController }