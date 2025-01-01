const express = require('express');
const { ActiveProductByParentCatWeb, SearchProducts, AllProductWeb, readProductWeb } = require('../../controller/controllers');

const ProductRouterWeb = express.Router();

ProductRouterWeb.get('/active-products/:parent_category', ActiveProductByParentCatWeb);
ProductRouterWeb.post('/search-products/:key',  SearchProducts);
ProductRouterWeb.get('/all-products', AllProductWeb);
ProductRouterWeb.get('/read-product/:_id', readProductWeb);

module.exports = {
    ProductRouterWeb
}