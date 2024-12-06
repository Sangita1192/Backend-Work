//it will handle all the routes of router and connect to app.js, which further connect to index.js
const express = require('express');
const parentCategoryRouter = require('./admin-panel/parentCategory');
const sizeRouter = require('./admin-panel/size');
const productCategoryRouter = require('./admin-panel/productCategory');
const { AdminRouter } = require('./admin-panel/admin');
const colorRouter = require('./admin-panel/color');
const { UserRouter } = require('./website/user');
const { ParentCategoryRouterWeb } = require('./website/ParentCategory');
const { ProductCategoryRouterWeb } = require('./website/ProductCategory');
const { ProductRouterWeb } = require('./website/product');
const ProductRouter = require('./admin-panel/product');
const { CartRouter } = require('./website/cart');
const PaymentRouter = require('./website/payment');


const adminPanelRouter = express.Router();  //hadnle all the routes of admin-panel
const websiteRouter = express.Router();  //hadnle all the routes of websites
const appRouter = express.Router();  //handle all the routes of Apps



adminPanelRouter.use('/parent-category', parentCategoryRouter);
adminPanelRouter.use('/product-category', productCategoryRouter)
adminPanelRouter.use('/size', sizeRouter);
adminPanelRouter.use('/admin', AdminRouter);
adminPanelRouter.use('/color', colorRouter);
adminPanelRouter.use('/products', ProductRouter)

//website Routers

websiteRouter.use('/users', UserRouter);
websiteRouter.use('/parent-categories', ParentCategoryRouterWeb)
websiteRouter.use('/product-categories', ProductCategoryRouterWeb);
websiteRouter.use('/products', ProductRouterWeb);
websiteRouter.use('/cart', CartRouter);
websiteRouter.use('/payment', PaymentRouter);





module.exports = {
    adminPanelRouter,
    websiteRouter,
    appRouter,     
}