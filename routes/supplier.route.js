const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/Supplier.controller');

router.route('/')
    .post(supplierController.createSupplier)
    .get(supplierController.getSupplier)
router.route('/:id')
    .get(supplierController.getSupplierDetails)
    .patch(supplierController.updateOneSupplier)



module.exports = router;