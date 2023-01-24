const mongoose = require("mongoose")
const {Schema} = mongoose;

const StoreSchema = new mongoose.Schema({
    storeName:{
        type:String,
        require:true,
        unique:true,
    },
    logo:{
        type:String,
    },
    avatar:{
        type:String,
    },
    rate:{
        type:[Number]
    },
    packageId:{
        type: [mongoose.Types.ObjectId],
        ref:'Pakge',
        require:true,
    },
    storeType:{
        type:String,
    },
    discrption:{
        type:String,
    },
    storeActivty:{
        type:String,
    },
    storeUsers:{
        type:[{
            userId:{
                type: [mongoose.Types.ObjectId],
                ref:'User'},
            auth:{
                type:[String]
            }
        }]
    },
    storeAdminId:{
        type: [mongoose.Types.ObjectId],
        ref:'User',
    },
    active :{
        type:Boolean,
        default:false
    },
    location:{
        type: [mongoose.Types.ObjectId],
        ref:'Location',    
    }
},{ timestamps:true });

const Store = mongoose.model("Store",StoreSchema);

module.exports = Store