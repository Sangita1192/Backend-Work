//import payment gateway with key;
const stripe = require('stripe')('sk_test_51LiyTNSH4QsKt7gAYWZpIajuDuTSeWPEHeErouhsUMtjITkHYE1cLM96gn6LvqicLVyyuy0D32wz2IK60S74ERLy00xyqVFrDo');


const createCheckout = async(req,res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:"success"});
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
    }
}

module.exports = {
    createCheckout
}