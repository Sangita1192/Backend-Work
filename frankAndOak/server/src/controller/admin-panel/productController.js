const express = require('express');
const Product = require('../../models/product');

//create product controller
const createProduct = async(req,res)=>{
    try{
        
        const data = req.body;
        console.log("files ===>",req.files)
        if(req.files){
            if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
            if(req.files.secondary_thumbnail) data.secondary_thumbnail= req.files.secondary_thumbnail[0].filename;
            if(req.files.images) data.images = req.files.images.map((image)=> image.filename);
        }

        const dataToSave = new Product(data);
        const response = await dataToSave.save();
        console.log(response);
        console.log(data);
        res.status(200).json({message:"success", data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json("internal server error");
    }
}

//read all products controller

const readProducts = async(req,res)=>{
    try{
        const response = await Product.find();
        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;
        res.status(200).json({message:"success", filePath, data:response}); 
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"})
    }
}

//update product status controller

const updateStatus = async(req,res)=>{
    try{
        const response = await Product.updateOne(req.params,
            {$set: req.body}
        );
        res.status(200).json({message:"success",data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error!!"});
    }
}

//delete Single Product controller

const deleteOneProduct = async(req,res)=>{
    try{
        const response = await Product.deleteOne(req.params);
        res.status(200).json({message:"success", data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}

//delete multiple Products

const deleteProducts = async(req,res)=>{
    try{
        const response = await Product.deleteMany({_id: {$in: req.body.checkedProduct}});
        res.status(200).json({message:"success", data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}


module.exports = {
    createProduct,
    readProducts,
    updateStatus,
    deleteOneProduct,
    deleteProducts
}