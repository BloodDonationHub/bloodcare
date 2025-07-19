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

router.post('/signup',(req, res)=>{
    const {username, email, password}  = req.body;
    const foundUser  = User.findOne({email}).exec(); 
    if(!foundUser){
        res.status(404).send("No User Found!");
    }
    if(!(foundUser.password === password)){
        res.status(400).send("Given credentials does not Match!");
    }
    const payload = {
        email : email
    }
    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign(payload,secret_key, {expiresIn: "1h"});
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
    res.status(200).send("You are signed up!");
})