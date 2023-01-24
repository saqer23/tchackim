const mongoose = require("mongoose")
const {Schema} = mongoose;

const FollwersSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },
    users:{
        type:[mongoose.Types.ObjectId],
        ref:'User',
    }
},{ timestamps:true });

const Follwers = mongoose.model("Follwers",FollwersSchema);

module.exports = Follwers