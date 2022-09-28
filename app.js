const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose, mongo } = require('mongoose');

// middleware
app.use(cors());
app.use(express.json());

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


app.get('/', (req, res) => {
    res.send('Route is Working')
})

app.post('/api/v1/product', async (req, res) => {
    // save or create
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.status(200).json({
            status: "success",
            message: "Product saved successfully",
            data: result
        })
    }
    catch (err) {
        res.status(400).json({
            status: "error",
            message: "Data insertion failed",
            error: err.message,
        })
    }
})



module.exports = app;