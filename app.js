const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose, mongo } = require('mongoose');

// middleware
app.use(cors());
app.use(express.json());




// app.get('/', (req, res) => {
//     res.send('Route is Working')
// })





// importing product routers
const productRoutes = require('./routes/product.route')
const brandRoutes = require('./routes/brand.route')
const categoryRoutes = require('./routes/category.route')
const storeRoutes = require('./routes/store.route')
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/brand', brandRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/store', storeRoutes)



module.exports = app;