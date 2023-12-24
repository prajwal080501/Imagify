const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    emial: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    picture: {
        type:String,
        required:true,
        trim:true
    },
}, {
    timestamps:true
})
const User = mongoose.model("User", userSchema);


module.exports = User;