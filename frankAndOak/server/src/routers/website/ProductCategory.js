const express = require('express');
const { ActiveProductCategoryWeb } = require('../../controller/controllers');

const ProductCategoryRouterWeb = express.Router();

ProductCategoryRouterWeb.get('/active-products-categories', ActiveProductCategoryWeb);

module.exports = {
    ProductCategoryRouterWeb
};