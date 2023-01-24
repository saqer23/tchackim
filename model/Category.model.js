const mongoose = require("mongoose")
const {Schema} = mongoose;

const CategorySchema = new mongoose.Schema({
    userId:{
        type: [mongoose.Types.ObjectId],
        ref:'User',
        require:true,
    },
    categoryName:{
        type:String, 
        require:true,
        unique:true,
    },
    categoryImg:{
        type:String,
        require:true,
    },
    categoryCode:{
        type:String,
        require:true,
        unique:true,
    }
},{ timestamps:true });

const Category = mongoose.model("Category",CategorySchema);

module.exports = Category