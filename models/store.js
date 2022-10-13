const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 5,
        required: [true, 'store must need to have a name'],
        enum: {
            values: ['dhaka', 'mymensingh', 'chitagong', 'sylhet', 'rangpur'],
            message: "{value} is not a valid name"
        }
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive'],
            default: 'active'

        }
    },
    manager: {
        name: String,
        type: String,
        id: {
            type: ObjectId,
            ref: "User"
        }
    }
}, {
    timestamps: true,
})

const Store = mongoose.model('Store', storeSchema)
module.exports = Store