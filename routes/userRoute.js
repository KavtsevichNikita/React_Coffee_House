const express = require("express")
const router = express.Router();
const User = require("../models/model")


//

router.route("/contact").post((req,res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.value;
    const message = req.body.message;

    const newUser = new User({
        name,
        email,
        phone,
        message
    });

        newUser.save();
})

router.get('/contact', async (req,res) =>{
    try {
        
        const user = await User.find()
        res.json(user)

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;