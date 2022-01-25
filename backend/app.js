const express = require("express");
const app = express();

app.use(express.json());

// start routes

const product = require("./routes/productRoutes");

app.use("/api/v1", product);

// end routes

module.exports = app;