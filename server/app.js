//backend of filehosting project

//importing packages
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import multer from 'multer';
import GridfsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import methodOverride from 'method-override';
import cors from 'cors';
import fileUpload from 'express-fileupload';
//init express app
const app=express();

//connect database
const mongoURI = 'mongodb+srv://admin:root123@filehosting.vj6pb.mongodb.net/<dbname>?retryWrites=true&w=majority'
const connect=mongoose.createConnection(mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true ,useFindAndModify:false});
// const connectDB=async()=>{
//     try {
//             await mongoose.connect(mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true ,useFindAndModify:false})
//             console.log('mongoose connected')
//             console.log(`server running on port ${PORT}`);
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// }


//middlewares
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use(fileUpload());

//init gridfs
let gfs;

connect.once(`open`,()=>{
    gfs=Grid(connect.db,mongoose.mongo);
    gfs.collection(`uploads`);
})

//Create storage engine
const storage=new GridfsStorage({
    url:mongoURI,
    file:(req,file)=>{
        return new Promise((resolve,reject)=>{
            const filename=file.originalname+path.extname(file.originalname);
            const fileInfo={
                filename:filename,
                bucketName:`uploads`
            };
            resolve(fileInfo)
        })
    }
})
//multer upload
const upload=multer ({storage});



//@route POST /upload
//@desc upload files
app.post(`/upload`, (req,res)=>{
    //receiving file from frontend
      const file = req.files.file;
    //   console.log(file);
       
     
      file.mv(`./uploads/${file.name}`, err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
    
       
      });
      
    
})

//init PORT variable
const PORT=process.env.PORT||3001

//server listen
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});