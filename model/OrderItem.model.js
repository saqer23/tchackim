const mongoose = require("mongoose")
const {Schema} = mongoose;

const OrderItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Types.ObjectId,
        ref:'Product',
        require:true,
    },
    amount :{
        type:Number,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    }
},{ timestamps:true });

const OrderItem = mongoose.model("OrderItem",OrderItemSchema);

module.exports = OrderItem