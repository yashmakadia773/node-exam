const { number } = require("joi")
let mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    email : {
        type : String,
        require: true
    },
    pass:{
        type: Number,
        require:true
    }
})

let user = mongoose.model("userSchema", userSchema)
module.exports = user