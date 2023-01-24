const paymentRepository  = require('../repository/payment.repository.js');

class PaymentService {

    constructor() {}

    async getPayments() {
        return await paymentRepository.getPayments();
    }

    async createPayment(payment) {
        return await paymentRepository.createPayment(payment);
    }

    async updatePayment(payment) {
        return await paymentRepository.updatePayment(payment);
    }

    async deletePayment(paymentId) {
        return await paymentRepository.deletePayment(paymentId);
    }

    async getPayment(paymentId) {
        return await paymentRepository.getPayment(paymentId);
    }
}

module.exports = new PaymentService();