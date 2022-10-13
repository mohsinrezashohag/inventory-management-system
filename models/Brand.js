const mongoose = require('mongoose');
// const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;
const { isEmail, isURL } = require('validator')

const brandSchema = new mongoose.Schema({
    //name
    //description
    //email
    //website
    //product
    //Supplier
    //status
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a brand name"],
        lowercase: true,
        maxLength: 100,
        unique: true
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        minLength: 20
    },
    location: String,
    email: {
        type: String,
        lowercase: true,
        validate: [isEmail, "provide a valid email address"]
    },
    website: {
        type: String,
        lowercase: true,
        validate: [isURL, "provide a valid website link"]
    },
    product: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ],
    suppliers: [{
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: 'Supplier'
        }

    }],
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true,
})

const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand;