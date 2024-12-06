const express = require('express');
const { ActiveProductByParentCatWeb } = require('../../controller/controllers');

const ProductRouterWeb = express.Router();

ProductRouterWeb.get('/active-products/:parent_category', ActiveProductByParentCatWeb);

module.exports = {
    ProductRouterWeb
}