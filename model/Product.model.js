const mongoose = require("mongoose")
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
    },
    shippingAllow: {
        type: Boolean,
        default: true
    },
    chatAllow: {
        type: Boolean,
        default: true
    },
    productImg: {
        type: [String],
        require: true,
    },
    discountPercent: {
        type: String,
    },
    type: {
        type: String
    },
    discountCode: {
        type: String,
    },
    productCode: {
        type: [[String]],
        default: []
    },
    oldNew: {
        type: String,
    },
    deliveryType: {
        type: [String]
    },
    rate: {
        type: [String],
        default: []
    },
    endDate: {
        type: String
    },
    price: {
        type: Number,
    },
    userId: {
        type: [mongoose.Types.ObjectId],
        ref: 'User',
        require: true,
    },
    storeId: {
        type: [mongoose.Types.ObjectId],
        ref: 'Store',
    },
    quantity: {
        type: String,
        require: true
    },
    active: {
        type: Boolean,
        default: true,
    },
    isActive: { // هذه اللي انتو طلبتوها
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
    },
    categoryId: {
        type: [mongoose.Types.ObjectId],
        ref: 'Category',
        require: true,
    },
    keyWordId: {
        type: [{
            type: [mongoose.Types.ObjectId],
            ref: 'KeyWord',
        }],
    },
    commrnt: {
        type: [{
            user_id: {
                type: String
            },
            commentContent: {
                type: String
            }
        }]
    }
}, { timestamps:true,toJSON: { virtuals: true }, toObject: { virtuals: true } });

ProductSchema.virtual('location',{
    ref:"Location",
    localField:"_id",
    foreignField:"product",
})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product