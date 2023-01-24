const mongoose = require("mongoose")
const {Schema} = mongoose;

const PaymentSchema = new mongoose.Schema({
    order:{
        type: [mongoose.Types.ObjectId],
        ref:'Order',
    },
    price:{
        type:Number,
    },
    shippingPrice:{
        type:Number,
    },
    paymentMethodId:{
        type: [mongoose.Types.ObjectId],
        ref:'PaymentMethod',
    }
},{ timestamps:true });

const Payment = mongoose.model("Payment",PaymentSchema);

module.exports = Payment