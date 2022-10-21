const User = require('../models/user')


exports.signupUserService = async (userInfo) => {
    console.log("hello hitting here");
    const user = await User.create(userInfo);
    return user;
}

exports.loginUserService = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
}