const express = require('express');
const { createCheckout } = require('../../controller/controllers');

const PaymentRouter = express.Router();

PaymentRouter.post('/create-checkout', createCheckout);


module.exports = PaymentRouter;