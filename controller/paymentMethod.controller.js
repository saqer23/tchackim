const paymentMethodService  = require('../service/paymentMethod.service.js');


class PaymentMethodController {

    async getPaymentMethods() {
        return await paymentMethodService.getPaymentMethods();
    }

    async createPaymentMethod(paymentMethod) {
        return await paymentMethodService.createPaymentMethod(paymentMethod);
    }

    async updatePaymentMethod(paymentMethod) {
        return await paymentMethodService.updatePaymentMethod(paymentMethod);
    }

    async deletePaymentMethod(paymentMethodId) {
        return await paymentMethodService.deletePaymentMethod(paymentMethodId);
    }

    async getPaymentMethod(paymentMethodId) {
        return await paymentMethodService.getPaymentMethod(paymentMethodId);
    }
}
module.exports = new PaymentMethodController();