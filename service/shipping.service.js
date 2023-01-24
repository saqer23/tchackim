const shippingRepository  = require('../repository/shipping.repository.js');

class ShippingService {

    constructor() {}

    async getShippings() {
        return await shippingRepository.getShippings();
    }

    async createShipping(shipping) {
        return await shippingRepository.createShipping(shipping);
    }

    async updateShipping(shipping) {
        return await shippingRepository.updateShipping(shipping);
    }

    async deleteShipping(shippingId) {
        return await shippingRepository.deleteShipping(shippingId);
    }

    async getShipping(shippingId) {
        return await shippingRepository.getShipping(shippingId);
    }
}

module.exports = new ShippingService();