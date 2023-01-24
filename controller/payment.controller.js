const paymentService  = require('../service/payment.service.js');


class PaymentController {

    async getPayments() {
        return await paymentService.getPayments();
    }

    async createPayment(payment) {
        return await paymentService.createPayment(payment);
    }

    async updatePayment(payment) {
        return await paymentService.updatePayment(payment);
    }

    async deletePayment(paymentId) {
        return await paymentService.deletePayment(paymentId);
    }

    async getPayment(paymentId) {
        return await paymentService.getPayment(paymentId);
    }
}
module.exports = new PaymentController();