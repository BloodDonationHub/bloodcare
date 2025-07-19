const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../db/user');
const Volunteer = require('../db/volunteer');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const connectDB = require('../db');
connectDB();
//incomplete for now
//will add later
router.get('/api/profile',(req, res)=>{
    const token =- req.cookies.token;
    console.log(token);
});

module.exports = router;