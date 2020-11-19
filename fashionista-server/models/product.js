const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name:String,
        type:String,
        image:String,
        price:Number,
        quantity:Number,
    }
);

module.exports = mongoose.model("Products", productSchema);