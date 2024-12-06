const express = require('express');
const { createProduct, readProducts, updateStatus, deleteOneProduct, deleteProducts } = require('../../controller/controllers');
const storageUpload = require('../../middleware/multer');

const ProductRouter = express.Router();

ProductRouter.post('/create-product',storageUpload, createProduct);
ProductRouter.get('/read-products', readProducts);
ProductRouter.put('/update-status/:_id', updateStatus);
ProductRouter.delete('/delete-product/:_id', deleteOneProduct);
ProductRouter.put('/delete-products', deleteProducts);


module.exports = ProductRouter;