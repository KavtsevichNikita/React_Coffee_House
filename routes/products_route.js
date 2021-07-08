const express = require("express")
const router = express.Router()
const Product = require("../models/product")



router.route("/products").post((req,res) =>{
    const file = req.body.file;
    const name = req.body.name;
    const country = req.body.country;
    const descr = req.body.descr;
    const price = req.body.price;
    const newProduct = new Product({
        file,
        name,
        country,
        descr,
        price
    });
    newProduct.save();
})

router.route("/products").get((req,res)=> {
    Product.find()
    .then(foundProduct => res.json(foundProduct))
})

module.exports = router