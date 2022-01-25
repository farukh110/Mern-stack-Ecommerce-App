const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const router = express.Router();

router.route("/products", getAllProducts);

module.exports = router;