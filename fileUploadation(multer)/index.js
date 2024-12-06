const express = require('express');
const path = require('path');
const multer = require('multer');  ///used to read data comes in form

const app = express();
app.use(express.json());  //it is used to read data comes in json

// // //1.No-File-input
// // multer().none();  ///if there is no input file

app.post('/file-upload-single',multer().none(), (req,res)=>{
    res.status(200).json({message:"success"});
});


// //2.Single file input with single file

const upload2 = multer({
    storage: multer.diskStorage(
        {
        destination: (req,file,next)=>{
            next(null, './uploads')
        },
        filename: (req,file,next)=>{
            console.log(file);
            //file_name should be unique
            next(null, Date.now()+Math.floor(Math.random()*10000) + path.extname(file.originalname))
        }
    })
}).single('profile');

app.post('/file-upload-singlefile',upload2, (req,res)=>{
    try{
        res.status(200).json({message:"success"});
    }
    catch(error){
        console.log(error);
    }
    
});


//3.Single file input with multiple files

const upload3 = multer({
    storage: multer.diskStorage({
        destination: (req,file,next)=>{
            next(null, './uploads')
        },
        filename: (req,file,next)=>{
            console.log(file);
            next(null, Date.now()+Math.floor(Math.random()*10000) + path.extname(file.originalname))
        }
    })
}).array('profile', 10); //10 is the max quantity

app.post('/file-upload-multiple',upload3, (req,res)=>{
    res.status(200).json({message:"success"});
});


//4. multiple file inputs 

const upload4 = multer({storage: multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './uploads');
    },
    filename:(req, file, next)=>{
        next(null, Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
})}).fields([
    {name: 'profile', maxCount: 1},
    {name: 'images', maxCount:10}
]);

app.post('/file-upload-multiple-fields', upload4, (req, res)=>{
    res.status(200).json({message: 'success'});
});

app.listen(4000, ()=>{
    console.log("server is working properly");
})