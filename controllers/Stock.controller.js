const { createStockService, getStockService, getStockDetailsService, updateOneStockService } = require("../services/stock.services");

exports.createStock = async (req, res, next) => {
    try {
        const result = await createStockService(req.body);
        res.status(200).json({
            status: "success",
            message: "Stock saved successfully",
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

exports.getStock = async (req, res, next) => {
    try {
        const result = await getStockService();
        res.status(200).json({
            status: "success",
            message: "Supplier data showing successfully",
            data: result
        })
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: "Data loading failed",
            error: err.message,
        })
    }
}

exports.getStockDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getStockDetailsService(id);
        res.status(200).json({
            status: "success",
            message: "Supplier Details showing successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Data loading failed",
            error: err.message,
        })
    }
}

exports.updateOneStock = async (req, res, next) => {
    try {
        const { id } = req.params;
        data = req.body;
        const result = await updateOneStockService(id, data);
        res.status(200).json({
            status: "success",
            message: "Brand data update successfully",
            data: result
        })
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: "Data update failed",
            error: err.message,
        })
    }
}