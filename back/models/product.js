
var mongoose = require('mongoose');
var Schema =    mongoose.Schema;
 
var Product = Schema({
    
    id: Number,
    product_name:String,
    stock: Number,
    product_image: String
});
module.exports =  mongoose.model('product',Product);