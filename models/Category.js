const mongoose = require('mongoose')
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types;

const CategorySchema = new mongoose.Schema({
    //name
    //description
    //imageURL
    name: {
        type: 'string',
        trim: true,
        minLength: 3,
        required: [true, "please provide a category name"],
        lowercase: true,
        unique: true
    },
    description: {
        type: 'string',
        required: [true, "please provide a description"],
    },
    imageURL: {
        type: 'string',
        validate: [validator.isUrl, 'image url must be a valid URL'],
    }
}, {
    timestamps: true,
})

const Category = mongoose.model('Category', CategorySchema);

exports = Category;