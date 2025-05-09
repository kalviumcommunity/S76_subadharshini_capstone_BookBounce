const express= require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path:'./config/.env'});
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./database/database.js')
const dashRoutes = require('./routes/dashRoutes');
const port = process.env.PORT;
connectDb();
app.use(express.json());
app.use('/api',userRoutes);
app.use('/api/dash',dashRoutes);
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})