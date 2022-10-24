/*
1. check if token exists
2.if token not exists send response
3. decode the token
4. if valid then call next()
*/
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(" ")?.[1]

        if (!token) {
            return res.status(401).json({
                status: failed,
                message: "You are not a logged in user"
            })
        }
        const decoded = await promisify(jwt.verify)(token, process.env.cryptoToken)
        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "your are not a logged in user"
        })
    }



}