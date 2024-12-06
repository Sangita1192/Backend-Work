const express = require('express');
const { createCart, readCartforUser, updateCartItemQty, deleteCartItem } = require('../../controller/controllers');

const CartRouter = express.Router();

CartRouter.post('/create-cart', createCart);
CartRouter.get('/read-cart/:user', readCartforUser);
CartRouter.put('/update-quantity/:_id', updateCartItemQty);
CartRouter.delete('/delete-cartitem/:_id', deleteCartItem);


module.exports = {
    CartRouter
}