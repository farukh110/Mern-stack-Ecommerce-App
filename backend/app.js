const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

// start routes

const product = require("./routes/productRoutes");

app.use("/api/v1", product);

// end routes

// middleware for errors

app.use(errorMiddleware);

module.exports = app;