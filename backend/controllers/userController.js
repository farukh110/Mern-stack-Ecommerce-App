const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");

// Register a user

exports.registerUser = catchAsyncErrors( async(req, res, next) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
    });

    const {name, email, password} = req.body;

    const user = await User.create({

        name,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });

    sendToken(user, 201, res);
});

// login user

exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
});

// logout user

exports.logout = catchAsyncErrors(async (req, res, next) => {

    res.cookie("token", null, {

        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({

        success: true,
        message: "Logged Out",
    });

});

// forget password

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
     return next(new ErrorHandler("User not Found", 404));   
    }

    // get reset password token

    const resetToken = user.getResetPasswordToken();
    
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then please ignore it`;

    try {

        await sendEmail({

            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message
        });

        res.status(200).json({

            success: true,
            message: `Email sent to ${user.email} successfully`
        });
        
    } catch (error) {

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
   
        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }
});

// reset password

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    // creating token hash

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({

        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    
    if (!user) {
        
        return next(
            new ErrorHandler(
                "Reset Password Token is invalid and or has been expired",400
            )
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);

});

// get user detail

exports.getUserDetails = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// update password

exports.updatePassword = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect ", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        
        return next(new ErrorHandler("password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
});

// update profile

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };

    // cloudinary

    const user = await User.findByIdAndUpdate(req.user.id, newUserData,{

        new: true,
        runValidators: true,
        useFindAndModify: false

    });

    res.status(200).json({

        success: true,
        user
    });
});

// get all users

exports.getAllUsers = catchAsyncErrors( async (req, res, next) => {

    const user = await User.find();

    res.status(200).json({
        
        success: true,
        user
    })
});

// get single user (admin)

exports.getUser = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        return next(

            new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
        );
    }

    res.status(200).json({

        success: true,
        user,
    });
});

// update user role (admin)

exports.updateUserRole = catchAsyncErrors( async (req, res, next) => {

    const newUserData = {

        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    };

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {

        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({

        success: true,

    });
});

// delete user (admin)

exports.deleteUser = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        
        return next(
            new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
        )
    }

    await user.remove();

    res.status(200).json({

        success: true,
        message: "user deleted successfully"
    });
});