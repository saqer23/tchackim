const mongoose = require("mongoose")
const {Schema} = mongoose;

const LocationSchema = new mongoose.Schema({
    product:{
        type: [mongoose.Types.ObjectId],
        ref:'Product',
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    circle:{
        type:String,
        require:true,
    },
    street:{
        type:String,
        require:true,
    },
    stated:{
        type:String,
    }
},{ timestamps:true });

const Location = mongoose.model("Location",LocationSchema);

module.exports = Location