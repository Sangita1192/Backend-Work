const express = require('express');
const { ActiveProductCategoryWeb, ActiveProdCatasParentCategoryWeb } = require('../../controller/controllers');

const ProductCategoryRouterWeb = express.Router();

ProductCategoryRouterWeb.get('/active-products-categories', ActiveProductCategoryWeb);
ProductCategoryRouterWeb.get('/read-product-category-by-parent/:parent_category', ActiveProdCatasParentCategoryWeb)

module.exports = {
    ProductCategoryRouterWeb
};