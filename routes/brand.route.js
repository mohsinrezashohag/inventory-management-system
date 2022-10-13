const express = require('express');
const router = express.Router();
const brandController = require('../controllers/Brand.controller');

router.route('/')
    .post(brandController.createBrand)
    .get(brandController.getBrands)
router.route('/:id')
    .patch(brandController.updateOne)



module.exports = router;