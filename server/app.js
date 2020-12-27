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
//init express app
const app=express();

//connect database
const mongoURI = 'mongodb+srv://admin:root123@cluster0.vj6pb.mongodb.net/filehosting?retryWrites=true&w=majority'
const connect=mongoose.createConnection(mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true ,useFindAndModify:false});


//middlewares
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());


//init gridfs
let gfs;

connect.once(`open`,()=>{
    gfs=Grid(connect.db,mongoose.mongo);
    gfs.collection(`uploads`);
})

//Create storage engine
const storage = new GridfsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
    }
  });

//multer upload
const upload=multer ({storage});



//@route POST /upload
//@desc upload files
app.post(`/upload`,upload.single('file'),(req,res)=>{
    res.send(`success`);
    
       
      });
      
    
//@route GET /files/filename
//desc get a file by filename
app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
      // File exists
      return res.json(file);
    });
  });


// @route DELETE /files/:id
// @desc  Delete file by passing file id
app.delete('/files/:id', (req, res) => {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
  
      res.send('deleted successfully')
    });
  });

//@route GET /files
//@desc get all files
app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'No files exist'
        });
      }
  
      // Files exist
      return res.json(files);
    });
  });

//init PORT variable
const PORT=process.env.PORT||3001

//server listen
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});