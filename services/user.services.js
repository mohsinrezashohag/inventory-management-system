const User = require('../models/user')


exports.signupUserService = async (userInfo) => {
    console.log("user info: ", userInfo);
    const userAssigning = new User(userInfo);
    const user = await userAssigning.save();
    console.log("this user", user);
    return user;
}

exports.loginUserService = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
}

exports.findUserByEmailService = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
}