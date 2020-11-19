var mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
    {
        name:String,
        image:String,
        price:Number,
        quantity:Number
    }
);

module.exports = mongoose.model("Cart", productSchema);