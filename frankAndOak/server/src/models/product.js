const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    short_description:String,
    thumbnail: String,
    secondary_thumbnail: String,
    images: Object,
    price: Number,
    mrp: Number,
    parent_category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'parentcategories'
    },
    product_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productCategory'
    },
    size:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'productSizes'
    }],
    color: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'colors'
    }],
    stock:{
        type:Boolean,
        default:true
    },
    brand: String,
    status: {
        type:Boolean,
        default:true
    },
    created_at:Date,
    updated_at:{
        type:Date,
        default:Date.now()
    }
})

productSchema.pre('save', function(){
    this.created_at = Date.now;
})

productSchema.pre('insertOne', function(){
    this.created_at = Date.now();
})



const Product = mongoose.model('products', productSchema);

module.exports = Product;