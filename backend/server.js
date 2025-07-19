const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
require('dotenv').config();


//routes importing
const register = require('./routes/register');
const signup = require('./routes/signup');
const volunteer = require('./routes/becomeaVolunteer');
const profile = require('./routes/profile');
const bloodRequest = require('./routes/requestBlood');

const PORT = process.env.PORT;

app.use('/api/auth',register);
app.use('/api/auth', signup);
app.use('/api', volunteer);
app.use('/api',profile);
app.use('/api',bloodRequest);

app.get('/',(req, res)=>{
    console.log("Homed");
    res.send("Hello to home page");
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});