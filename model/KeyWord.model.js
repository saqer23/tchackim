const mongoose = require("mongoose")
const {Schema} = mongoose;

const KeyWordSchema = new mongoose.Schema({
    userId:{
        type: [mongoose.Types.ObjectId],
        ref:'User',
        require:true,
    },
    keyWordName:{
        type:String,
        require:true,
        unique:true,
    }
},{ timestamps:true });

const KeyWord = mongoose.model("KeyWord",KeyWordSchema);

module.exports = KeyWord