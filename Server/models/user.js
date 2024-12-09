const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    profilepic:{
        type: String,
        default: 'https://crefcard.onrender.com/images/default.png',
    },
    verifytoken:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false //isame hamara default admin ka ka status false hoga 
    }
 })

module.exports = mongoose.model("user", userSchema);