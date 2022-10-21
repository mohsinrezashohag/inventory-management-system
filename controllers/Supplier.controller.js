const { createSupplierService, getSupplierService, getSupplierDetailsService, updateOneSupplierService } = require("../services/supplier.services");

exports.createSupplier = async (req, res, next) => {
    try {
        const result = await createSupplierService(req.body);
        res.status(200).json({
            status: "success",
            message: "Supplier saved successfully",
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

exports.getSupplier = async (req, res, next) => {
    try {
        const result = await getSupplierService();
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

exports.getSupplierDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getSupplierDetailsService(id);
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

exports.updateOneSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;
        data = req.body;
        const result = await updateOneSupplierService(id, data);
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