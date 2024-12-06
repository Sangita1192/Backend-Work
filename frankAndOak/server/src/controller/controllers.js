//admin controllers
const { registerAdmin, adminLogin, generateOtp, updateEmail } = require("./admin-panel/adminController");

//Color Controllers
const { createColor, viewColorCategories, updateColorStatus, deleteColor, deleteColors, viewColor, updateColor, ActiveColors } = require("./admin-panel/colorController");

//ParentCategory Controllers
const { createParentCategory, viewParentCategory,updateParentCategoryStatus, deleteParentCategory, deleteParentCategories, readParentCategory, updateParentCategory, ActiveParentCategory} = require("./admin-panel/parentCategoryController");

//Product Category controllers
const { createProductCategory, viewProductCategory, updateProductStatus, deleteProduct, deleteProductCategories, readProductCategory, updateProductCategory, ActiveProductCategory, productCategoryByparentCategory } = require("./admin-panel/productCategoryController");

// Size Controllers
const {createSize, viewSizes, updateSizeStatus, deleteSize, deleteMultipleSizes, viewSize, updateSize, ActiveSizes} = require("./admin-panel/sizeController");

//product controllers
const { createProduct, readProducts, updateStatus, deleteOneProduct, deleteProducts } = require("./admin-panel/productController");


//WEBSITE CONTROLLERS

//userControllers
const { generateOtpWeb, registerUser, verifyJwt, loginUser } = require("./website/userController");
const { ActiveParentCategoryWeb } = require("./website/ParentCategoryController");
const { ActiveProductCategoryWeb } = require("./website/ProductCategoryController");
const { ActiveProductByParentCatWeb } = require("./website/ProductController");
const { createCart, readCartforUser, updateCartItemQty, deleteCartItem } = require("./website/cartController");
const { createCheckout } = require("./website/payment");


module.exports ={
    createParentCategory,
    viewParentCategory,
    updateParentCategoryStatus,
    deleteParentCategory,
    deleteParentCategories,
    readParentCategory,
    updateParentCategory,
    createSize,
    ActiveParentCategory,
    createProductCategory,
    viewProductCategory,
    updateProductStatus,
    deleteProduct,
    deleteProductCategories,
    readProductCategory,
    updateProductCategory,
    ActiveProductCategory,
    registerAdmin,
    adminLogin,
    generateOtp,
    updateEmail,
    viewSizes,
    updateSizeStatus,
    deleteSize,
    deleteMultipleSizes,
    viewSize,
    updateSize,
    ActiveSizes,
    createColor,
    viewColorCategories,
    updateColorStatus,
    deleteColor,
    deleteColors,
    viewColor,
    updateColor,
    ActiveColors,
    productCategoryByparentCategory,
    createProduct,
    readProducts,
    updateStatus,
    deleteOneProduct,
    deleteProducts,
    generateOtpWeb,
    registerUser ,
    verifyJwt,
    loginUser,
    ActiveParentCategoryWeb,
    ActiveProductCategoryWeb,
    ActiveProductByParentCatWeb,
    createCart,
    readCartforUser,
    updateCartItemQty,
    deleteCartItem,
    createCheckout
}