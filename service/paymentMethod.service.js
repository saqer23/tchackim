const paymentMethodRepository  = require('../repository/paymentMethod.repository.js');

class PaymentMethodService {

    constructor() {}

    async getPaymentMethods() {
        return await paymentMethodRepository.getPaymentMethods();
    }

    async createPaymentMethod(paymentMethod) {
        return await paymentMethodRepository.createPaymentMethod(paymentMethod);
    }

    async updatePaymentMethod(paymentMethod) {
        return await paymentMethodRepository.updatePaymentMethod(paymentMethod);
    }

    async deletePaymentMethod(paymentMethodId) {
        return await paymentMethodRepository.deletePaymentMethod(paymentMethodId);
    }

    async getPaymentMethod(paymentMethodId) {
        return await paymentMethodRepository.getPaymentMethod(paymentMethodId);
    }
}

module.exports = new PaymentMethodService();