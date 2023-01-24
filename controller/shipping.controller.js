const shippingService  = require('../service/shipping.service.js');


class ShippingController {

    async getShippings() {
        return await shippingService.getShippings();
    }

    async createShipping(shipping) {
        return await shippingService.createShipping(shipping);
    }

    async updateShipping(shipping) {
        return await shippingService.updateShipping(shipping);
    }

    async deleteShipping(shippingId) {
        return await shippingService.deleteShipping(shippingId);
    }

    async getShipping(shippingId) {
        return await shippingService.getShipping(shippingId);
    }
}
module.exports = new ShippingController();