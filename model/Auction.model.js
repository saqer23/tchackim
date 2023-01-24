const mongoose = require("mongoose")
const {Schema} = mongoose;

const AuctionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User',
    },
    endDate:{
        type:String
    },
    productId:{
        type: mongoose.Types.ObjectId,
        ref:'Product',
        require:true,
    },
    price:{
        type:Number
    },
},{ timestamps:true });

const Auction = mongoose.model("Auction",AuctionSchema);

module.exports = Auction