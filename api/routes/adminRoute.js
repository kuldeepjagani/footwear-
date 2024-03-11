const express = require('express')
const { GetcategoriesController, AddcategoriesController, EditcategoriesController, DeletecategoriesController, addProductController } = require('../controller/adminCtrl')
const multer = require('multer')
const router = express.Router();
const path = require('path')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");





// ------   Admin Route ---------------------
router.post('/addcategories', AddcategoriesController)
router.get('/getcategories', GetcategoriesController)
router.put('/editcategories/:id', EditcategoriesController)
router.delete('/deletecategories/:id', DeletecategoriesController)



module.exports = router