const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose, mongo } = require('mongoose');
const { getProducts, createProduct } = require('./controllers/Product.controller');

// middleware
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('Route is Working')
})






app.post('/api/v1/product', createProduct)
app.get('/api/v1/product', getProducts)



module.exports = app;