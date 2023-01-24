const mongoose = require("mongoose")
const {Schema} = mongoose;

const ShippingSchema = new mongoose.Schema({
    order:{
        type: [mongoose.Types.ObjectId],
        ref:'Order',
    },
    location:{
        type: [mongoose.Types.ObjectId],
        ref:'Location',
    },
    shippingMethodId:{
        type: [mongoose.Types.ObjectId],
        ref:'ShippingMethod',
    }
},{ timestamps:true });

const Shipping = mongoose.model("Shipping",ShippingSchema);

module.exports = Shipping