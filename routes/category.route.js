const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/Category.controller')


router.route('/')
    .post(categoryController.createCategory)
    .get(categoryController.getCategories)
// router.route('/:id')
//     .patch(categoryController.updateOneCategory)


module.exports = router;