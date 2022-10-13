const Category = require('../models/Category')



exports.getCategoryService = async () => {
    const Categories = await Category.find({});
    return Categories;
}

exports.createCategoryService = async (data) => {
    console.log(data);
    const category = new Category(data);
    const result = await category.save();
    return result;
}


// exports.updateOneCategoryService = async (id, data) => {
//     const category = await Category.findOneAndUpdate({ _id: id }, data)
//     return category;
// }