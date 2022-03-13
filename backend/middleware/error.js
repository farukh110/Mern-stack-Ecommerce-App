const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // mongoDB id error 

    if (err.name === "CastError") {
        
        const message = `Resource not found. invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // mongoDB duplicate key error

    if(err.code === 11000) {

        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    // json web token error

    if(err.code === "JsonWebTokenError") {

        const message = `Json Web Token is invalid, try again`;
        err = new ErrorHandler(message, 400);
    }

    // json web token expire

    if(err.code === "TokenExpiredError") {

        const message = `Json Web Token is Expired, try again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({

        success: true,
        message: err.message
    });
}