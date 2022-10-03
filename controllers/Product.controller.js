const Product = require("../models/Product");
const { getProductService, createProductService, updateProductService, bulkUpdateProductsService, deleteProductService, bulkDeleteProductsService, } = require("../services/product.services")

exports.getProducts = async (req, res, next) => {
    try {

        const queryObject = { ...req.query }
        const excludeField = ['limit', 'page', 'sort'];
        excludeField.forEach(field => delete queryObject[field])

        console.log('original Object', req.query);
        console.log('original Object', queryObject);


        //sorting at the same times
        let sortedFilter = {}
        if (req.query.sortBy) {
            const sortedText = req.query.sortBy.split(',').join(' ');
            sortedFilter.sortBy = sortedText;
        }

        let excludeFields = {}
        if (req.query.sortBy) {
            const fieldsText = req.query.fields.split(',').join(' ');
            excludeFields.fields = fieldsText;
        }



        const products = await getProductService(queryObject, sortedFilter, excludeFields);
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

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body);
        res.status(200).json({
            status: "success",
            message: "Product updated successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Product Not Updated",
            error: error.message
        })
    }

}

exports.bulkUpdate = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await bulkUpdateProductsService(data);
        res.status(200).json({
            status: "success",
            message: "Products Updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Products Not Updated",
            error: error.message
        })
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteProductService(id)
        if (!result.deletedCount) {
            res.status(400).json({
                status: "failed",
                message: "Couldn't find the products'",
                error: error.message
            })
        }
        res.status(200).json({
            status: "success",
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't delete the product",
            error: error.message
        })
    }
}

exports.bulkDeleteProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await bulkDeleteProductsService(data.ids);

        res.status(200).json({
            status: "success",
            message: "Products deleted successfully"
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't delete the products'",
            error: error.message
        })
    }
}