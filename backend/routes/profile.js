const express = require('express');
const router = express.Router();
const User = require('../db/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/profile', async (req, res) => {
    try {
        // 1. Check if token exists
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ 
                success: false,
                message: "Authorization token missing" 
            });
        }

        // 2. Verify token
        if (!process.env.SECRET_KEY) {
            return res.status(500).json({
                success: false,
                message: "Server configuration error"
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        
        // 3. Validate decoded payload
        if (!decoded?.email) {
            return res.status(401).json({
                success: false,
                message: "Invalid token payload"
            });
        }

        // 4. Fetch user data
        const userInfo = await User.findOne({ email: decoded.email })
                                .select('-password -__v -tokens')
                                .lean();

        if (!userInfo) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // 5. Return successful response
        res.status(200).json({
            success: true,
            data: userInfo
        });

    } catch (error) {
        console.error("Profile error:", error);
        
        // Handle specific JWT errors
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                success: false,
                message: "Token expired"
            });
        }
        
        // Generic server error
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

module.exports = router;