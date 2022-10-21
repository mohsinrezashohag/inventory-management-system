const express = require('express');
const router = express.Router();
const stockController = require('../controllers/Stock.controller')







router.route('/')
    .get(stockController.getStock)
    .post(stockController.createStock)


router.route('/:id')
    .get(stockController.getStockDetails)
    .patch(stockController.updateOneStock)

module.exports = router;