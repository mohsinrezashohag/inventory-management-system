const express = require('express');
const router = express.Router();
const storeController = require('../controllers/Store.controller')


router.route('/')
    .post(storeController.createStore)
    .get(storeController.getStores)
router.route('/:id')
    .get(storeController.getStoreDetails)


module.exports = router;