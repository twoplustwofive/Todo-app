const mongoose = require("mongoose");

const URI = "mongodb+srv://todolist:todolist@cluster0.ogcxl.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectdb = async()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true});
    console.log("DB connected!");
}

module.exports = connectdb;
