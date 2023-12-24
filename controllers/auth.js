const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
exports.auth() = async (req, res) => {
    const { name, email, picture } = req.body;

    try{
        const user = await User.find({email: email});

        if(user){
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        return res.status(200).json({
            token,
            user:user
        });
        }
    }
    catch(error){
        return res.status(400).json({
            message: "Something went wrong",
        })
    }
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
       const user = await User.findByIdAndDelete(id);  

         return res.status(200).json({
              message: "User deleted successfully",
         })
    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong",
        })
    }
}


exports.getUser = async (req, res) => {
    const {id} = req.params;
     try {
        const user = await User.findById(id);
        if(user){
            return res.status(200).json({
                user: user,
            })
        }

        return res.status(400).json({
            message: "Something went wrong",
        })      
     } catch (error) {
        return res.status(400).json({
            message: "Something went wrong",
        })
     }
}