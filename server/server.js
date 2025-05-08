const express= require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path:'./config/.env'});
const connectDb = require('./database/database.js')
const port = process.env.PORT;
connectDb();
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})