const mongoose = require('mongoose');
const { isEmail, isURL } = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: [3, "minimum 3 letter required"],
        maxLength: [50, "maximum 50 letter required"]
    },
    email: {
        type: String,
        validate: [isEmail, 'must be a valid email address']
    },
    brand: {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        id: {
            type: ObjectId,
            ref: 'Brand'
        }
    },
    ContactNumber: {
        type: String,
        required: true,

    },
    tradeLicenseNumber: {
        type: String,
        required: [true, 'please provide the trade license number']
    },
    presentAddress: {
        type: String,
        required: [true, 'please provide  present address']
    },
    permanentAddress: {
        type: String,
        required: [true, 'please provide permanent address']
    },
    location: {
        type: String,
        required: [true, 'please provide location'],
        enum: {
            values: ['dhaka', 'khulna', 'rajshahi', 'mymensingh', 'rangpur', 'sylhet'],
            message: "please provide location"
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [isURL, 'please provide a valid image URL']
    },
    NIDimageUrl: {
        type: String,
        required: true,
        validate: [isURL, 'please provide a valid image URL']
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['active', 'inactive'],
            message: "status must included",
            default: 'active'
        }
    }
}, {
    timestamps: true,
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;