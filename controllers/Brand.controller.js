const { createBrandService, getBrandService, updateOneService } = require("../services/brand.services");

exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body);
        res.status(200).json({
            status: "success",
            message: "Brand saved successfully",
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

exports.getBrands = async (req, res, next) => {
    try {
        const result = await getBrandService();
        res.status(200).json({
            status: "success",
            message: "Brands data showing successfully",
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



exports.updateOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        data = req.body;
        const result = await updateOneService(id, data);
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