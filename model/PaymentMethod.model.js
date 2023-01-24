const mongoose = require("mongoose")
const {Schema} = mongoose;

const PaymentMethodSchema = new mongoose.Schema({
    paymentMethodName:{
        type:String, 
        require:true,
    },
    type:{
        type:String,
    }
},{ timestamps:true });

const PaymentMethod = mongoose.model("PaymentMethod",PaymentMethodSchema);

module.exports = PaymentMethod