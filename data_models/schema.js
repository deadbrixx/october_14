var mongoose = require('mongoose');
var ecommerce_schema = mongoose.Schema({
    product_name: {type:String, required:true},
    product_price: {type:Number, required:true}
})
module.exports = mongoose.model('ecom', ecommerce_schema, 'ecom_collection')