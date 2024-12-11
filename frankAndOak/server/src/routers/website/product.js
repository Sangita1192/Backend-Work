const express = require('express');
const { ActiveProductByParentCatWeb, SearchProducts } = require('../../controller/controllers');

const ProductRouterWeb = express.Router();

ProductRouterWeb.get('/active-products/:parent_category', ActiveProductByParentCatWeb);
ProductRouterWeb.post('/search-products/:key',  SearchProducts);

module.exports = {
    ProductRouterWeb
}