const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    // {
    // name:String,
    // pw:String,
    // role:String,
    // cart:Array,
    // }
    {
        name: {
        type: String,
        min: [4, 'Too short, min 4 characters are required'],
        max: [32, 'Too long, max 16 characters are required']
      },
      pw: {
        type: String,
        min: [4, 'Too short, min 4 characters are required'],
        max: [32, 'Too long, max 16 characters are required'],
        required: 'password is required'
      },
      role:String,
      cart:Array,
});

module.exports = mongoose.model("Users", userSchema);