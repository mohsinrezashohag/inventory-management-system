const mongoose = require('mongoose')

// schema design 
const productSchema = new mongoose.Schema({
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

    // unit: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: ["kg", "litre", "pcs"],
    //         message: "cant unite {values} it should be kg/pcs/litre"
    //     }
    // },

    quantity: {
        type: Number,
        required: true,
        min: [0, "minimum product quantity 0"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "quantity must be an integer"
        }
    },

    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "on-process"],
            message: "status must be in stock/out-of-stock/on-process"
        }
    },


    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     red: "Supplier"
    // },

    // categories: [{
    //     name: {
    //         type: String,
    //         required: true,
    //     },
    //     _id: mongoose.Schema.Types.ObjectId
    // }]



}, {
    timestamps: true,
})


// schema > model > query 
// model
const Product = mongoose.model("Product", productSchema);
// mongoose middleware pre & post
productSchema.pre('save', function (next) {
    console.log("before saving product");
    if (this.quantity == 0) {
        this.status = "out-of-stock"
    }
    next();
})

productSchema.post('save', function (doc, next) {
    console.log(doc);
    console.log("after saving the product");
    next();
})


module.exports = Product;