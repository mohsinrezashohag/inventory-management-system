exports.getProducts = async (req, res, next) => {
    try {
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


        res.status(200).json({
            status: "success",
            message: "Product found successfully",
            data: products
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Products not found",
            error: error.message
        })
    }
}

exports.createProduct = async (req, res, next) => {
    // save or create
    try {
        //const result = await Product.create(req.body);
        const product = new Product(req.body);


        // checking an instance
        if (product.quantity == 0) {
            product.status = "out-of-stock"
        }
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
}