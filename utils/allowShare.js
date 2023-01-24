const Product = require('../model/Product.model.js')
const User = require('../model/User.model.js')
const allowShare = async (req,res,next) =>{
    const products = await (await Product.find({userId:req.user.id})).length
    const user = await User.findById(req.user.id).populate({path:"packgeId"});
    if(user.packgeId){
        if(user.packgeId.packgeAmount >= (products+1)){
            console.log(true)
            next()
        }else{
            console.log(false);
        }
    }
}

module.exports = {
    allowShare
} 