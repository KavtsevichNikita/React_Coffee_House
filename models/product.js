const mongoose = require("mongoose");


const Products = {
    file :String,
    name:String,
    country:String,
    descr:String,
    price:String
}

const Product = mongoose.model("Product", Products);

module.exports = Product;