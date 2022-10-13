const { createStoreService, getStoreService, getStoreDetailsService } = require("../services/store.services");

exports.createStore = async (req, res, next) => {
    try {
        const result = await createStoreService(req.body);
        res.status(200).json({
            status: "success",
            message: "Store saved successfully",
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

exports.getStores = async (req, res, next) => {
    try {
        const result = await getStoreService();
        console.log(result);
        res.status(200).json({
            status: "success",
            message: "Store data showing successfully",
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



exports.getStoreDetails = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log("hitting here");
        const result = await getStoreDetailsService(id);
        res.status(200).json({
            status: "success",
            message: "Store details showing successfully",
            data: result
        })
    }
    catch (err) {
        res.status(400).json({
            status: "failed",
            message: "Store Details not found",
            error: err.message,
        })
    }



}