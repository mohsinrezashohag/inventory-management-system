const User = require('../models/user')


exports.signupUserService = async (userInfo) => {
    const userAssigning = new User(userInfo);
    const user = await userAssigning.save();
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