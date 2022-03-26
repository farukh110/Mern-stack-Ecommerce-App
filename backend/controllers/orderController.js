const Order = require("../model/orderModel");
const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create new order

exports.createNewOrder = catchAsyncErrors(async (req, res, next) => {

    const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order
  });

});

// logged in user single order details

exports.getOrderDetails = catchAsyncErrors(async (req, res, next) => {

     const order = await Order.findById(req.params.id).populate(
       "user",
       "name email"
     );

     if(!order) {
       return next(new ErrorHandler("Order not found with this given id:", 404));
     }

     res.status(200).json({
       success: true,
       order,
     });
});

// my orders

exports.myOrders = catchAsyncErrors(async (req, res, next) => {

    const orders = await Order.find({ user: req.user._id });

     res.status(200).json({
       success: true,
       orders,
     });

});

// get all orders admin

exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {

    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach((order) => {

      totalAmount += order.totalPrice;

    });

     res.status(200).json({
       success: true,
       totalAmount,
       orders,
     });

});

// update order status -- admin

exports.updateOrder = catchAsyncErrors(async (req, res, next) => {

  const order = await Order.findById(req.params.id);

  if (!order) {
    
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    
    return next(new ErrorHandler("you have already delivered this order", 400));
  }

  order.orderItems.forEach(async (item) => {

    await updateStock(item.Product, item.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    
     order.deliveredAt = Date.now(); 
  }

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });

});

async function updateStock(id, quantity) {
  
  const product = await Product.findById(id);

  product.Stock -= quantity;
  
  await product.save({ validateBeforeSave: false });
}

// delete order admin

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {

  const order = await Order.findById(req.params.id);

  if (!order) {
    
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
   success: true, 
  });

});