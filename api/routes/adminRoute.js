const express = require('express')
const { GetcategoriesController, AddcategoriesController, EditcategoriesController, DeletecategoriesController } = require('../controller/adminCtrl')
const multer = require('multer')
const router = express.Router();
const path = require('path')


// // upload image
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.name}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });

// const upload = multer({ storage: storage });



// ------   Admin Route ---------------------
router.get('/getcategories', GetcategoriesController)
router.post('/addcategories', AddcategoriesController)
router.put('/editcategories/:id', EditcategoriesController)
router.delete('/deletecategories/:id', DeletecategoriesController)


// router.post('/addProduct', upload.single('image'), addProductController);


module.exports = router