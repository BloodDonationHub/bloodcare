const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('../db/user');
const BloodRequest = require('../db/bloodRequest');
require('dotenv').config();

router.use(cookieParser());

//connecting to Mongodb
const connectDB = require('../db');
connectDB();
//to input blood request
router.post('/bloodRequest',async(req,res)=>{
    const bloodRequestInfo = req.body;
    const newBloodRequest = new BloodRequest(bloodRequestInfo);
    await newBloodRequest.save();
    try{
        res.cookie('BloodRequest','true',{
            httpOnly:true,
            maxAge:3600000
        });
    }
    catch(err){
        console.error(`Error while making cookie for blood request ${err}`);
    }
    res.status(200).send('Blood request send!');
});

//to output the blood request
router.get('/bloodRequest',async(req, res)=>{
    const bloodRequests = await BloodRequest.find({});
    console.log(bloodRequests);
    res.send(bloodRequests);

});

module.exports = router;