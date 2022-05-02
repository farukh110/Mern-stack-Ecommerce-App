const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

// start create product controller -- admin

exports.createProduct = catchAsyncErrors(async (req,res, next) => {

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({

        success: true,
        product
    });
}); 

// end create product controller

// start get all products controller

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
    
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

    const products = await apiFeature.query;

    res.status(200).json({

        success: true,
        products,
        productsCount,
        resultPerPage,
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

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        product,
    });
});

// end get product details controller 

// create new review or update the review

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {

  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {

    product.reviews.forEach((rev) => {

      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);

    });
  } else {

    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {

    avg += rev.rating;
    
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});


// get all reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });

});

// delete review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });

});
