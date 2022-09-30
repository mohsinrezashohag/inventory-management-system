const { getProductServices, createProductService } = require("../services/product.services")

exports.getProducts = async (req, res, next) => {
    try {
        const products = await getProductServices();
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
        const result = await createProductService(req.body);
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