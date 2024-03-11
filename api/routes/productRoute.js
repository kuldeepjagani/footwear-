const express = require('express')
const { getproductDetails, addProductController, updateProduct, deleteProduct, getAllProducts } = require("../controller/productCtrl")
const multer = require('multer')

const path = require('path')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// // upload image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('public/images'))
    },
    filename: (req, file, cb) => {
        return cb(null, `image - ${Date.now()}.${file.originalname}`)
    }
});

const upload = multer({ storage: storage });


router.post('/addproduct', upload.single('image'), isAuthenticatedUser, addProductController);
router.get('/getallproduct', getAllProducts);
router.get('/getproductdetials', getproductDetails);
router.put('/updateproduct/:id', updateProduct);
router.put('/deleteproduct/:id', deleteProduct);
router.get("/product/:id", getproductDetails)


module.exports = router