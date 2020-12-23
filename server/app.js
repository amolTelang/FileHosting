//backend


//importing packages
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import multer from 'multer';

//init express app
const app=express();

//connect database
mongoose.connect()


//init PORT variable
const PORT=process.env.PORT||3001

//server listen
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})