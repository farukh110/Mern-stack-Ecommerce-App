const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

// start create product controller -- admin

exports.createProduct = catchAsyncErrors(async (req,res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({

        success: true,
        product
    });
}); 

// end create product controller

// start get all products controller

exports.getAllProducts = catchAsyncErrors(async (req,res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({

        success: true,
        products
    });

}); 

// end get all products controller

// start update product controller -- admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {

        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({

        success: true,
        product
    });
});

// end update product controller

// start delete product controller -- admin

exports.deleteProduct = catchAsyncErrors(async(req, res, next) => {

    let product = await Product.findById(req.params.id);

   if (!product) {
        
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
 });

// end delete product controller

// start get product details controller 

exports.getProductDetails = catchAsyncErrors(async(req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        product,
        productCount
    })
});

// end get product details controller 
