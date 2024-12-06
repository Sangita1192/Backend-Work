const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const User = require('../../models/user');
const otpStore = new Map();

const generateOtpWeb = async(req,res)=>{
    try{
        
        let otp;
        let loop = true;
        while(loop){
            let tempOtp = Math.floor(Math.random()*1000000);
            if( tempOtp >= 100000 && tempOtp <= 999999 ){
                otp = tempOtp;
                loop = false;
            }else{
                loop = true;
            }
        }
        otpStore.set(req.body.email, otp);

        setTimeout(()=>{
            otpStore.delete(req.body.email);

        },120000) //delete otp and blank otp store after 2min or 120s

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.MAILER_EMAIL,
                pass: process.env.MAILER_PASSWORD
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        const options = {
            from: process.env.MAILER_EMAIL,
            to: req.body.email,
            subject: "OTP",
            text: `your one time password is ${otp}`
        }

        transport.sendMail(options, (error,decode)=>{
            if(error)
            {
                console.log(error)
                return res.status(500).json({message: "Error"});
            }
            res.status(200).json({message: "otp sent"});
        })
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}
//verify OTP and register USER
const registerUser = async(req,res)=>{
    try{
        const {otp, ...dataWithoutOtp} = req.body;
        const sentOtp = otpStore.get(req.body.email);

        if(sentOtp !== Number(otp)) return res.status(401).json({message: "Invalid OTP"});
      

        const dataToSave = new User(dataWithoutOtp);

        const response = await dataToSave.save();

        //generate jsonwebtoken for user credential saved in cookies
        //actual user data gets in data._doc when extract from mongoose
        jwt.sign(response._doc, process.env.JWT_KEY, {expiresIn: '10d'},(error,token)=>{
            if(error) 
            {
                console.log(error);
                res.status(501).json({message:"try after some time"});
                return;
            }
            res.status(200).json({message: "success", auth: token});
        })
        
    }
    catch(error){
        if(error.code === 11000 && error.keyPattern.email === 1) return res.status(400).json({message: "email already exists!!"});
        console.log(error);
        res.status(500).json({message: "internal server error"});
    }
}

const verifyJwt = async(req,res)=>{
    try{
        console.log("verify api called", req.body);
        jwt.verify(req.body.auth, process.env.JWT_KEY, (error,decode)=>{
            if(error) return res.status(401).json({message:"invalid token"});
            res.status(200).json({message:"success", data:decode});
            console.log(decode);
        })
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}


//login user controller
const loginUser = async(req,res)=>{
    try{
        const userData = await User.findOne({email: req.body.email});
        if(!userData) return res.status(401).json({message:"invalid email"});
        if(userData.password !== req.body.password) return res.status(401).json({message:"invalid password"});

        //generate token to save data into cookies        
        jwt.sign(userData._doc, process.env.JWT_KEY,{expiresIn: '10d'},(error,token)=>{
            if(error){
                console.log(error);
                res.status(501).json({message:"try after some time"});
                return; 
            }
            res.status(200).json({message:"success", data:userData, token});
        })   

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
}

module.exports = {
    generateOtpWeb,
    registerUser,
    verifyJwt,
    loginUser
    
}