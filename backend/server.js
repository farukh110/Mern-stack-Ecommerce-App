const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// start config

dotenv.config({ path: "backend/config/config.env" });

// end config

// start connect database

connectDB();

// end connect database


const server = app.listen(process.env.PORT, () => {

    console.log(`server is working now on localhost:${process.env.PORT}`);
    
});

// unhandled promise rejection

process.on("unhandledRejection", (err) => {

    console.log(` Error: ${err.message} `);
    console.log(` shutting down the server `);

    server.close(() => {

        process.exit(1);
        
    });
});