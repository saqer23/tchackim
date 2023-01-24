const mongoose = require("mongoose")
const {Schema} = mongoose;

const WallteSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        require:true,
    },
    palance:{
        type:Number,
        require:true,
        default:0
    },
    unactivePalance:{
        type:Number,
        default:0
    },
},{ timestamps:true });

const Wallte = mongoose.model("Wallte",WallteSchema);

module.exports = Wallte