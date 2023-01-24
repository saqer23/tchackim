const mongoose = require("mongoose")
const {Schema} = mongoose;

const ShippingMethodSchema = new mongoose.Schema({
    shippingMethodName:{
        type:String, 
        require:true,
    },
},{ timestamps:true });

const ShippingMethod = mongoose.model("ShippingMethod",ShippingMethodSchema);

module.exports = ShippingMethod