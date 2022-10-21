const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt');
const md5 = require('md5');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, "must be a valid email"]
    },
    password: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {

                    minLength: 6,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                }),
            message: "{VALUE} are not strong enough"
        }
    },

    confirmPassword: {
        type: String,
        required: [true, "please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            }, message: "password don't matched "
        },
        role: {
            type: String,
            enum: ["buyer", "store-manager", "admin"],
            default: "buyer"
        },
        firstName: {
            type: String,
            trim: true,
            required: [true, "first name must needed"],
            minLength: [3, "minimum 3 letter required"],
            maxLength: [15, "maximum 15 letter required"]
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, "first name must needed"],
            minLength: [3, "minimum 3 letter required"],
            maxLength: [15, "maximum 15 letter required"]
        },
        contactNumber: {
            type: String,
            validate: [validator.isMobilePhone, 'please provide a valid contact number']
        },
        shippingAddress: {
            type: String,
        },
        imageUrl: {
            type: String,
            validate: [validator.isURL, "must be a valid image url"]
        },
        status: {
            type: String,
            enum: ["active", "inactive", "blocked"],
            default: "active"
        },
        passwordChangeAt: Date,
        passwordResetToken: String,
        passwordResetExpires: Date

    }
},
    {
        timestamps: true,
    })


const hashing = async (pass) => {
    const hashedPass = await bcrypt.hash(pass, 11);
    return hashedPass;
}


userSchema.pre("save", function (next) {
    const passText = this.password;
    // hashing + salting
    const hashedPassword = md5(passText)
    this.password = hashedPassword;
    this.confirmPassword = undefined;
    next();
})

// using a method comparing password during login
userSchema.methods.comparePassword = function (password, hashedPassword) {
    if (password === hashedPassword) {
        console.log("true");
        return true;
    }
}





const User = new mongoose.model("User", userSchema)

module.exports = User