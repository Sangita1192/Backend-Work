const ProductCategory = require("../../models/productCategory");

const ActiveProductCategoryWeb = async(req,res)=>{
    try{
        const response = await ProductCategory.find({status:true}).populate();
        res.status(200).json({message:"success", data:response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}

module.exports = {
    ActiveProductCategoryWeb
};