const mongoose = require("mongoose")
const {Schema} = mongoose;

const AdminSchema = new mongoose.Schema({
    paymentShow:{
        type:Boolean,
    },
    shippingShow:{
        type:Boolean,
    }
},{ timestamps:true });

const Admin = mongoose.model("Admin",AdminSchema);

module.exports = Admin