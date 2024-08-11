const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config({path: "./config/.env"})
const port = process.env.PORT || 3002 ;


/// connection to database
const connect = require("./config/connectDB");
connect();
app.use('/api/user',require("./roots/userRoutes"));



//////// creat server
app.listen(port,(error)=>{
    if(error) console.log(error);
    console.log(`Server is running on port ${port}`);

})
















