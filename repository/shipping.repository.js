const  Shipping  = require('../model/Shipping.model.js');

class ShippingRepository {

    

    async getShippings() {
        const shippings = await Shipping.find().populate({path:"location shippingMethodId"});
        return shippings;
    }

    async getShipping(shippingId) {
        const shipping = await Shipping.findById(shippingId).populate({path:"location shippingMethodId"});
        return shipping;
    } 

    async createShipping(shipping) {
        let data = {};
        try {
            data = await Shipping.create(shipping.body);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateShipping(shipping) {
        let data = {};
        try {
            data = await Shipping.findByIdAndUpdate(shipping.params.shippingId,{$set:shipping.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteShipping(shippingId) {
        let data = {};
        try {
            data = await Shipping.findByIdAndDelete(shippingId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ShippingRepository();