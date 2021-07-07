const mongoose = require("mongoose");


const Users = {
    name:String,
    email:String,
    phone:Number,
    message:String
}

const User = mongoose.model("User", Users);

module.exports = User;