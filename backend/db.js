const mongoose = require('mongoose');
const users = require('./db/user');
require('dotenv').config();
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDb connnected");
    }
    catch(err){
        console.error("Error connecting Mongodb: ",err.message);
        process.exit(1);
    }
};

module.exports = connectDB;