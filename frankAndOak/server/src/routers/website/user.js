// it will handle all the website's routes'

const express = require('express');
const { generateOtpWeb, registerUser, verifyJwt, loginUser } = require('../../controller/controllers');


const UserRouter = express.Router();

UserRouter.post('/generate-otp', generateOtpWeb);
UserRouter.post('/register-user', registerUser);
UserRouter.post('/verify-user', verifyJwt);
UserRouter.post('/login-user', loginUser);



module.exports = {
    UserRouter
}