const mongoose = require("mongoose");


const Users = {
    name:String,
    email:String,
    phone:String,
    message:String
}

const User = mongoose.model("User", Users);

module.exports = User;