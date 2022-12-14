const Product = require('../models/Product')
const Brand = require('../models/Brand')


//query, sortedFilter, excludeFields,condition
exports.getProductService = async (pageQueries) => {
    console.log('this is page queries :', pageQueries);
    // const products = await Product.find({ $or: [{ _id: "6334a38fc04a2dfdc0489803" }, { status: "wwhef" }] })
    //const products = await Product.find({}, "name price")
    // const products = await Product.find({ price: { $lt: 500 } })

    // with mongoose query model
    // const products = await Product
    //     .where("name").equals(/\w/)
    //     .where("price").gt(70)
    //     .limit(2).sort({ quantity: -1 })
    // const product = await Product.findById('6334aa86b9f37498d73989f6')
    // console.log(sortedFilter);
    // const products = await Product.find(query).select(excludeFields.fields).sort(sortedFilter.sortBy);
    const products = await Product.find({})
        .skip(pageQueries.skip)
        .limit(pageQueries.limit)
    const totalDocuments = await Product.countDocuments();
    const pageCount = Math.ceil(totalDocuments / pageQueries.limit)
    return { totalDocuments, pageCount, products };
}


exports.createProductService = async (data) => {
    const product = await Product.create(data);
    // const product = new Product(data);
    // const result = await product.save();

    // step-1 => brand Id
    // step-2 => update brand(push product id to the brand based on brand id)
    const { _id: productId, brand } = product;
    const updatingBrand = await Brand.updateOne({ _id: brand.id }, { $push: { product: productId } })
    console.log(updatingBrand.nModified);
    //checking an instance
    if (product.quantity == 0) {
        product.status = "out-of-stock"
    }


    return product;
}

exports.updateProductService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $inc: data }, {
        runValidators: true
    })

    // const product = await Product.findById(productId);
    // const result = await product.set(data).save();
    return result;
}

exports.bulkUpdateProductsService = async (data) => {
    // const result = await Product.updateMany({ _id: data.ids }, data.data, {
    //     runValidators: true
    // })
    // return result;
    const products = [];
    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, product.data))
    })

    const result = await Promise.all(products)
    console.log(result);
    return result;
}


exports.deleteProductService = async (id) => {
    console.log(id);
    const result = await Product.deleteOne({ _id: id });
    return result;
}


exports.bulkDeleteProductsService = async (ids) => {
    const result = await Product.deleteMany({});//_id: ids
    return result;
}




