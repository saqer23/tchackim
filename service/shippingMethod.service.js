const shippingMethodRepository  = require('../repository/shippingMethod.repository.js');

class ShippingMethodService {

    constructor() {}

    async getShippingMethods() {
        return await shippingMethodRepository.getShippingMethods();
    }

    async createShippingMethod(shippingMethod) {
        return await shippingMethodRepository.createShippingMethod(shippingMethod);
    }

    async updateShippingMethod(shippingMethod) {
        return await shippingMethodRepository.updateShippingMethod(shippingMethod);
    }

    async deleteShippingMethod(shippingMethodId) {
        return await shippingMethodRepository.deleteShippingMethod(shippingMethodId);
    }

    async getShippingMethod(shippingMethodId) {
        return await shippingMethodRepository.getShippingMethod(shippingMethodId);
    }
}

module.exports = new ShippingMethodService();