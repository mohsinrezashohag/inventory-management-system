const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const { isURL } = require('validator')


const stockSchema = new mongoose.Schema({
    productId: {
        type: ObjectId,
        required: true,
        ref: "Product"
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "product name must be true"],
        minLength: [3, "Minimum 3 word needed"],
        maxLength: [100, "Maximum 100 word possible"]
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "minimum product price is 0"]
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "minimum product quantity is 0"]
    },

    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "cant unite {values} it should be kg/pcs/litre"
        }
    },

    imageURL: {
        type: String,
        validate: [isURL, 'must be a valid image URL']
        // validators: (values) => {
        //     if (!Array.isArray(values)) {
        //         return false;
        //     }
        //     let isValid = false;
        //     values.forEach(url => {
        //         if (!validator.isUrl(url)) {
        //             isValid = false;
        //         }
        //     });
        //     return isValid;
        // }
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: 'Brand'
        }
    },
    store: {
        name: String,
        // required: true,
        id: {
            type: ObjectId,
            ref: "Store"
        }
    },
    status: {
        type: String,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: "{VALUE} must be included"
        }
    },
    suppliedBy: {
        name: String,
        // required: true,
        id: {
            type: ObjectId,
            ref: 'Supplier'
        }
    },
    sellCount: {
        type: Number,
        min: 0,
        default: 0
    }


},
    {
        timestamps: true,
    })

const Stock = mongoose.model('Stock', stockSchema)
module.exports = Stock;