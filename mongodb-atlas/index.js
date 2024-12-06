//install mongoose, express with command npm i mongoose, express

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const url = "mongodb+srv://panwarsangeeta04:q_b!9k5ebHGhY57@sangeeta.snkax.mongodb.net/?retryWrites=true&w=majority&appName=Sangeeta";

//connect the database
mongoose.connect(url)
.then(()=>{
    console.log('connected to mongoDB');
}).catch((error)=>{
    console.log('Error: ', error);
})

//CREATE SCHEMAS

const userSchema = new mongoose.Schema({    //Schema is mongoose object, so you need to use new keyword
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    status:{
        type:Boolean,
        default: true
    },
    password: {     //this field is not required
        type: String,
    }
});

//Create Model- should be in Pascal Case (use to communicate with database)

const User = mongoose.model('users', userSchema);

//Insert Data
app.post("/create-user", async (req,res)=>{
    try{
        console.log(req.body);

        const data = new User(req.body); //create object from Model to verify data coming from user in body.
    
        const response = await data.save(); //insert data into database
        res.status(200).json({message: "success", data:response})
    }
    catch(error){
        console.log(error);
        res.status(501).json({message: "internal server error"});
    }
})

//UPDATE DATA

app.put("/update-user/:_id", async(req,res)=>{
    try{
        const dataExist = await User.findOne({_id:req.params});
        if(!dataExist) return res.status(401).json({message: "Data not exists"});
        const response = await User.updateOne(
            req.params,
            {$set : req.body}
        )
        res.status(200).json({message: "success", data:response});
    }
    catch(error){
        console.log(error);
        res.status(501).json({
            message: "internal server error!!"
        })
    }
})

//READ DATA- read all data

app.get('/read-user', async(req,res)=>{

    try{
        const response = await User.find();
        const totalUsers = await User.find().countDocuments({});  //it will return number of total records
        console.log(totalUsers);

        res.status(200).json({message: "success", data:response})
    }
    catch(error){
        console.log(error);
        res.status(501).json({message: "internal server Error!!"})
    }
})

//DELETE DATA

app.delete('/delete-user/:_id', async(req,res)=>{
    try{
        const dataExist = await User.findOne({_id: req.params});
        if(!dataExist) return res.status(401).json({message:"Data doesn't exists!!"});
    
        const response = await User.deleteOne({_id:req.params});
        res.status(200).json({message: "success", data: response});
    }
    catch(error){
        console.log(error);
        res.status(501).json({message:"internal server error!!"})
    }
    
})

app.listen(5200, ()=>{
    console.log("Server is running on port 5200");
})