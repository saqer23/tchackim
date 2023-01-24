const mongoose = require("mongoose")
const {Schema} = mongoose;

const PakgeSchema = new mongoose.Schema({
    pakgeName:{
        type:String,
        require:true,
    },
    pakgePrice:{
        type:Number,
        require:true,
    },
    pakgePeriod:{
        type:Date,
    },
    packgeAmount:{
        type:Number
    },
},{ timestamps:true });

const Pakge = mongoose.model("Pakge",PakgeSchema);

module.exports = Pakge