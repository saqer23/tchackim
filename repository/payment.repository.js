const  Payment  = require('../model/Payment.model.js');

class PaymentRepository {

    

    async getPayments() {
        const payments = await Payment.find().populate({path:"paymentMethodId"});
        return payments;
    }

    async getPayment(paymentId) {
        const payment = await Payment.findById(paymentId).populate({path:"paymentMethodId"});
        return payment;
    }

    async createPayment(payment) {
        let data = {};
        try {
            data = await Payment.create(payment.body);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updatePayment(payment) {
        let data = {};
        try {
            data = await Payment.findByIdAndUpdate(payment.params.paymentId,{$set:payment.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deletePayment(paymentId) {
        let data = {};
        try {
            data = await Payment.findByIdAndDelete(paymentId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new PaymentRepository();