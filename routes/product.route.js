const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product.controller')

//file uploading
const multer = require('multer');
const uploader = require('../middleware/uploader');

//different route for file upload
router.route('/file-upload')
    // <input type="file" name="image">
    // in react --> form data
    .post(uploader.single("image"), productController.fileUpload)







router.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)

router.route('/bulk-update').
    patch(productController.bulkUpdate)

router.route('/bulk-delete').
    delete(productController.bulkDeleteProduct)

router.route('/:id')
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = router;