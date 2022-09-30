const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose, mongo } = require('mongoose');
const { getProducts, createProduct } = require('./controllers/Product.controller');

// middleware
app.use(cors());
app.use(express.json());




// app.get('/', (req, res) => {
//     res.send('Route is Working')
// })





// importing product routers
const productRoutes = require('./routes/product.route')
app.use('/api/v1/product', productRoutes)



module.exports = app;