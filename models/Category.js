const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types;
const { isURL } = require('validator')

const CategorySchema = new mongoose.Schema({
    //name
    //description
    //imageURL
    name: {
        type: String,
        trim: true,
        minLength: 3,
        required: [true, "please provide a category name"],
        lowercase: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, "please provide a description"],
    },
    imageURL: {
        type: String,
        validate: [isURL, 'image url must be a valid URL'],
    }
}, {
    timestamps: true,
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;