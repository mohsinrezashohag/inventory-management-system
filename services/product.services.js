const { getProducts } = require('../controllers/Product.controller');
const Product = require('../models/Product')
exports.getProductServices = async () => {
    // const products = await Product.find({ status: { $ne: "out-of-stock" } })
    // const products = await Product.find({ $or: [{ _id: "6334a38fc04a2dfdc0489803" }, { status: "wuhfwhfjwjwfwhef" }] })
    //const products = await Product.find({}, "name price")
    // const products = await Product.find({ price: { $lt: 500 } })

    // with mongoose query model
    const products = await Product
        .where("name").equals(/\w/)
        .where("price").gt(70)
        .limit(2).sort({ quantity: -1 })
    // const product = await Product.findById('6334aa86b9f37498d73989f6')


    return products;
}


exports.createProductService = async (data) => {
    //const result = await Product.create(req.body);
    //   const product = new Product(req.body);
    const product = new Product(data);
    //checking an instance
    if (product.quantity == 0) {
        product.status = "out-of-stock"
    }
    const result = await product.save();

    return result;
}