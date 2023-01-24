const  ShippingMethod  = require('../model/ShippingMethod.model.js');

class ShippingMethodRepository {

    

    async getShippingMethods() {
        const shippingMethods = await ShippingMethod.find();
        return shippingMethods;
    }

    async getShippingMethod(shippingMethodId) {
        const shippingMethod = await ShippingMethod.findById(shippingMethodId);
        return shippingMethod;
    }

    async createShippingMethod(shippingMethod) {
        let data = {};
        try {
            data = await ShippingMethod.create(shippingMethod.body);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateShippingMethod(shippingMethod) {
        let data = {};
        try {
            data = await ShippingMethod.findByIdAndUpdate(shippingMethod.params.shippingMethodId,{$set:shippingMethod.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteShippingMethod(shippingMethodId) {
        let data = {};
        try {
            data = await ShippingMethod.findByIdAndDelete(shippingMethodId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ShippingMethodRepository();