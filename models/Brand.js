const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = new mongoose.Schema({
    //name
    //description
    //email
    //website
    //product
    //Supplier
    //status
    name: {
        type: 'string',
        trim: true,
        required: [true, "Please provide a brand name"],
        lowercase: true,
        maxLength: 100,
        unique: true
    },
    description: {
        type: 'string',
        required: [true, "Please provide a description"],
        minLength: 100
    },
    email: {
        type: 'string',
        lowercase: true,
        validate: [validator.isEmail, "provide a valid email address"]
    },
    website: {
        type: 'string',
        lowercase: true,
        validate: [validator.isUrl, "provide a valid website link"]
    },
    product: [
        {
            type: ObjectId,
            ref: 'Product'
        }
    ],
    suppliers: [{
        name: string,
        contactNumber: string,
        id: {
            type: ObjectId,
            ref: 'Supplier'
        }

    }],
    status: {
        type: string,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, {
    timestamps: true,
})

const Brand = mongoose.model('Brand', brandSchema)

exports = Brand;