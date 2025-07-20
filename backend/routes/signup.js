const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('../db/user');
require('dotenv').config();

router.use(cookieParser());

//connecting to Mongodb
const connectDB = require('../db');
connectDB();

router.post('/signup',async(req,res)=>{
    const {username, email, password} = req.body;
    const secret_key = process.env.SECRET_KEY;
    const payload = {
        email: email
    }

    const newUser = new User({username, email, password});
    await newUser.save();

    const token = jwt.sign(payload, secret_key, {expiresIn: '2h'});
    try{
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 360000
        });
    }
    catch{
        console.error("Error while settting cookkie");
        res.status(500).send("Error occured while settting cookie");
    }
    console.log(token, email, password);
    console.log("Registered!");
    res.send("You are Registerd !");
}); 

module.exports = router;