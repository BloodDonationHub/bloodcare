const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../db/user');
const Volunteer = require('../db/volunteer');
require('dotenv').config();

const connectDB = require('../db');
connectDB();

router.post('/become-a-volunteer',async (req, res)=>{
    const volunteerInfo = req.body;

    const newVolunteer = new Volunteer(volunteerInfo);
    await newVolunteer.save();
    //to update the become a volunter in user
    // const result = await User.updateOne()
    console.log(volunteerInfo);
    res.status(200).send("you are volunteer");
});

module.exports = router;