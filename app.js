const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose, mongo } = require('mongoose');
const bodyParser = require('body-parser');

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());




// app.get('/', (req, res) => {
//     res.send('Route is Working')
// })





// importing product routers
const productRoutes = require('./routes/product.route')
const brandRoutes = require('./routes/brand.route')
const categoryRoutes = require('./routes/category.route')
const storeRoutes = require('./routes/store.route')
const supplierRoutes = require('./routes/supplier.route')
const stockRoutes = require('./routes/stock.route')
const userRoutes = require('./routes/user.route')
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/brand', brandRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/store', storeRoutes)
app.use('/api/v1/supplier', supplierRoutes)
app.use('/api/v1/stock', stockRoutes)
app.use('/api/v1/user', userRoutes)



module.exports = app;