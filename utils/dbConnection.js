const mongoose = require('mongoose')

function dbConnect() {
    mongoose.connect(process.env.LOCAL_DATABASE);
}

module.exports = dbConnect;