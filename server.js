const colors = require('colors')
const mongoose = require('mongoose');
const app = require('./app');
const dbConnect = require('./utils/dbConnection');
const PORT = 5000;
const dotenv = require('dotenv').config();


// database connections
dbConnect();


app.listen(PORT, () => {
    console.log("Listening on port : ".blue.bold, PORT);
});
