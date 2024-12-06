const express = require('express');
const multer = require('multer');
const { adminLogin, generateOtp, updateEmail } = require('../../controller/controllers');

const AdminRouter = express.Router();

AdminRouter.post('/login',multer().none(), adminLogin);
AdminRouter.post('/generate-otp', generateOtp);
AdminRouter.post('/update-email', updateEmail);


module.exports = {AdminRouter}