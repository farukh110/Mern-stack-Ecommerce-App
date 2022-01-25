const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// start config

dotenv.config({ path: "backend/config/config.env" });

// end config

// start connect database

connectDB();

// end connect database


app.listen(process.env.PORT, () => {

    console.log(`server is working now on localhost:${process.env.PORT}`);
    
});
