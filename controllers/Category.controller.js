const { createCategoryService, getCategoryService, updateOneCategoryService } = require("../services/category.services");

exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        res.status(200).json({
            status: "success",
            message: "Category saved successfully",
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

exports.getCategories = async (req, res, next) => {
    try {
        const result = await getCategoryService();
        console.log(result);
        res.status(200).json({
            status: "success",
            message: "Category data showing successfully",
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



// exports.updateOneCategory = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         data = req.body;
//         const result = await updateOneCategoryService(id, data);
//         res.status(200).json({
//             status: "success",
//             message: "Category data update successfully",
//             data: result
//         })
//     }
//     catch (err) {
//         res.status(400).json({
//             status: "failed",
//             message: "Data update failed",
//             error: err.message,
//         })
//     }
// }