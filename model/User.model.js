const mongoose = require("mongoose")
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    phoneNo:{
        type:String,
        require:true,
        unique:true,
    },
    address:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isSubAdmin:{
        type:[String]
    },
    profileImg:{
        type:String
    }
},{ timestamps:true });

const User = mongoose.model("User",UserSchema);

module.exports = User