const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDB = require("./config/database");

// handling uncaught exception

process.on("uncaughtException",(err) => {

    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to uncaught exception");
    process.exit(1);
});

// start config

dotenv.config({ path: "backend/config/config.env" });

// end config

// start connect database

connectDB();

// end connect database

// cloudinary

cloudinary.config({

    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const server = app.listen(process.env.PORT, () => {

    console.log(`server is working now on localhost:${process.env.PORT}`);
    
});

// start unhandled promise rejection

process.on("unhandledRejection", (err) => {

    console.log(` Error: ${err.message} `);
    console.log(`shutting down the server due to unhandled Rejection`);

    server.close(() => {

        process.exit(1);
        
    });
});

// end unhandled promise rejection
