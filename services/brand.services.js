const Brand = require('../models/Brand')

exports.createBrandService = async (data) => {
    console.log(data);
    const brand = new Brand(data);
    const result = await brand.save();
    return result;
}

exports.getBrandService = async () => {
    const brands = await Brand.find({}).populate('product')
    return brands;
}


exports.updateOneService = async (id, data) => {
    const brand = await Brand.findOneAndUpdate({ _id: id }, data)
    return brand;
}