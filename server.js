const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());


// connecct mongoose

mongoose.connect("mongodb+srv://Nikita:1111@cluster0.keyir.mongodb.net/Users",{ useNewUrlParser: true, useUnifiedTopology: true })



//require routes

 app.use("/", require("./routes/userRoute"));


app.use("/home", require("./routes/userRoute"));

app.listen(3001,function(){
    console.log("Express server is running on port 3001")
})




