const mongoose = require("mongoose")
const {Schema} = mongoose;

const OrderSchema = new mongoose.Schema({
    orderItem:{
        type: [mongoose.Types.ObjectId],
        ref:'OrderItem',
        require:true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        require:true,
    },
    isReturen:{
        type:Boolean
    },
    status:{
        type:Boolean
    },
},{ timestamps:true });

const Order = mongoose.model("Order",OrderSchema);

module.exports = Order