const express =require('express');
const {MongoClient, ObjectId} = require('mongodb');
const multer = require('multer');  //initiate or import multer
const path = require('path');  //import path 
const fs = require('fs');

const app = express();

app.use('/files', express.static('./uploads')); //when /files path came, go to static path ./uploads

const url = "mongodb://localhost:27017";
const dbname = "MongoApi"; //database name

const client = new MongoClient(url);

const connect = async() =>{
    await client.connect();
    const db = client.db(dbname);
    const collection = db.collection('products');  //create collection
    return collection;
}
//insert product in database 
const diskStorage = multer.diskStorage(
    {
        destination: (req,file,cb)=>{
            cb(null,'./uploads');
        },
        filename: (req,file,cb)=>{
            cb(null,Date.now()+Math.floor(Math.random()*1000)+path.extname(file.originalname));
        }
})
const upload = multer({storage: diskStorage}).fields([
    {name:'thumbnail', maxCount:1},
    {name:'productImg', maxCount:5}
]);


app.post('/insert-product',upload, async(req,res)=>{
    try{
        console.log(req.body);   //data input of text format
        console.log(req.files); // data input of file format

        const data = req.body;

        if(req.files){
            if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
            //it will store filename of thumbnail in the data

            if(req.files.productImg) data.imges = req.files.productImg.map((file)=> file.filename);
            //it will return a array with filename of all the images.

            //now insert into database
        }
        const collection = await connect();
        const response = await collection.insertOne(data); //when data inserted in database response will store in this variable.
        res.status(200).json({message:'success', data:response});
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "internal server error"}); //send error message if something is not working
    }
})

//Read Data from database
app.get('/all-products/', async(req,res)=>{
    try{
        const collection = await connect();
        const response = await collection.find().toArray(); //with this command only we can't access the images, we can only see filename, there should be filepath
        
        //dynamic filepath - we have to create static path means when files path came go to specific path(defined in top)
        const filepath = `${req.protocol}://${req.get('host')}/files/`;
        const ImgWithPath = response.map((product)=>{
            product.thumbnail = filepath + product.thumbnail;
            product.imges = product.imges.map((img)=>filepath + img);
            
            return product; // it will return the array after made changes
        })

        res.status(200).json({message:"success", data:ImgWithPath});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }   
})

//DELETE DATA from DATABASE including image

app.delete('/delete-product/:_id', async(req,res)=>{
    try{
        
        const collection = await connect();
        const data = await collection.findOne({_id: new ObjectId(req.params._id)});

        if(!data) return res.status(401).json({message:"Invalid object Id"});

        if(fs.existsSync(`./uploads/${data.thumbnail}`)) fs.unlinkSync(`./uploads/${data.thumbnail}`);

        data.imges.forEach(img => {
            
            if(fs.existsSync(`./uploads/${img}`)) fs.unlinkSync(`./uploads/${img}`);
           
        });

        const response = await collection.deleteOne({_id: new ObjectId(req.params._id)});
        res.status(200).json({message:"success", data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
   
})

//Update DATA
app.put('/update-product/:_id',upload, async(req,res)=>{
    try{
        const collection = await connect();
        const data = req.body;
       
        //find the existing data
        const olddata = await collection.findOne({_id: new ObjectId(req.params._id)});

        // console.log(olddata);
        if(!olddata) return res.status(401).json("invalid object id");

        if(req.files){
            if(req.files.thumbnail){
                data.thumbnail = req.files.thumbnail[0].filename;
                if(fs.existsSync(`./uploads/${olddata.thumbnail}`)) fs.unlinkSync(`./uploads/${olddata.thumbnail}`)
            }
            if(req.files.productImg){
                data.imges= req.files.productImg.map((product)=> product.filename)

                olddata.imges.forEach((img)=>{
                    if(fs.existsSync(`./uploads/${img}`)) fs.unlinkSync(`./uploads/${img}`);
                })
            }
        }

        const response = await collection.updateOne(
            {_id: new ObjectId(req.params._id)},
            {$set: data}
        );
        
        res.status(200).json({message:"success", data:response});

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000");
})