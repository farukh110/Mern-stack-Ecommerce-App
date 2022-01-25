const mongoose = require("mongoose");

const dbConnection = () => {

    mongoose.connect(process.env.DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: false

}).then((data) => {

    console.log(`MongoDB connected with server: ${data.connection.host}`);

}).catch((error) => {

    console.log(error);
})

}

module.exports = dbConnection;

