const shippingMethodService  = require('../service/shippingMethod.service.js');


class shippingMethodController {

    async getShippingMethods() {
        return await shippingMethodService.getShippingMethods();
    }

    async createShippingMethod(shippingMethod) {
        return await shippingMethodService.createShippingMethod(shippingMethod);
    }

    async updateShippingMethod(shippingMethod) {
        return await shippingMethodService.updateShippingMethod(shippingMethod);
    }

    async deleteShippingMethod(shippingMethodId) {
        return await shippingMethodService.deleteShippingMethod(shippingMethodId);
    }

    async getShippingMethod(shippingMethodId) {
        return await shippingMethodService.getShippingMethod(shippingMethodId);
    }
}
module.exports = new shippingMethodController();