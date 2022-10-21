const { signupUserService, loginUserService } = require("../services/user.services")

exports.signupUser = async (req, res, next) => {
    try {
        const userInfo = req.body;
        const user = await signupUserService(userInfo);
        res.status(200).json({
            status: 'success',
            message: 'user created successfully',
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
/*
1.check email password are given
2.load user with email
3.if not user then send res
4.compare password
5.if pass not correct send res
6.check user active or not
7.if not active then send res
8.generate token
9.send response & token
*/
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(401).json({
                status: 'failed',
                message: "please enter your email & password"
            })
        }
        const user = await loginUserService(email);


        const isPasswordMatched = user.comparePassword(password, user.password);
        console.log(isPasswordMatched);
        if (!isPasswordMatched) {
            return res.status(401).json({
                status: 'failed',
                message: "please enter valid credentials"
            })
        }



        if (!user) {
            return res.status(401).json({
                status: 'not found',
                message: "user not found"
            })
        }

        if (user.status != 'active') {
            return res.status(401).json({
                status: 'account not active',
                message: "user account is not activated yet"
            })
        }


        res.status(200).json({
            status: "success",
            message: "user login successfully",
            data: user
        })

    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "user login failed",
        })
    }



}