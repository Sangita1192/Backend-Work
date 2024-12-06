const Product = require("../../models/product");

const ActiveProductByParentCatWeb = async(req, res)=>{
   try{
        const response = await Product.find({parent_category: req.params.parent_category,status:true})
        .populate('parent_category')
        .populate('product_category')
        .populate('size')
        .populate('color');

        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;
        res.status(200).json({message:"success",filePath, data:response});
    
   } 
   catch(error){
    console.log(error);
    res.status(500).json({message:"internal server error"});
   }
    
}
module.exports = {
    ActiveProductByParentCatWeb
}