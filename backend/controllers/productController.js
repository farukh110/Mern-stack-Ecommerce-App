const Product = require("../model/productModel");

// start create product controller -- admin

exports.createProduct = async (req,res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({

        success: true,
        product
    })
} 

// end create product controller

// start get all products controller

exports.getAllProducts = async (req,res) => {

    const products = await Product.find();

    res.status(200).json({

        success: true,
        products
    })
} 

// end get all products controller

// start update product controller -- admin

exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        
        return res.status(500).json({

            success: false,
            message: "Product not found"
        }); 
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
}

// end update product controller

// start delete product controller -- admin

exports.deleteProduct = async(req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        
        return res.status(500).json({
            success: false,
            message: "Product not found"
        });
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
 }

// end delete product controller

// start get product details controller 

exports.getProductDetails = async(req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        
        return res.status(500).json({

            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        product
    })
}

// end get product details controller 
