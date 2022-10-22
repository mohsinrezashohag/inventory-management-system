module.exports.authorization = (...role) => {
    return returnMiddleware = async (req, res, next) => {
        const userRole = req?.user.role;

        if (!role.includes(userRole)) {
            return res.status(401).json({
                status: "failed",
                message: "you are not authorized to do it"
            })
        }

        next();
    }
}
