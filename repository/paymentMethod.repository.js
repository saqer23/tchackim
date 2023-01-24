const  PaymentMethod  = require('../model/PaymentMethod.model.js');

class PaymentMethodRepository {

    

    async getPaymentMethods() {
        const paymentMethods = await PaymentMethod.find();
        return paymentMethods;
    }

    async getPaymentMethod(paymentMethodId) {
        const paymentMethod = await PaymentMethod.findById(paymentMethodId);
        return paymentMethod;
    }

    async createPaymentMethod(paymentMethod) {
        let data = {};
        try {
            data = await PaymentMethod.create(paymentMethod.body);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updatePaymentMethod(paymentMethod) {
        let data = {};
        try {
            data = await PaymentMethod.findByIdAndUpdate(paymentMethod.params.paymentMethodId,{$set:paymentMethod.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deletePaymentMethod(paymentMethodId) {
        let data = {};
        try {
            data = await PaymentMethod.findByIdAndDelete(paymentMethodId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new PaymentMethodRepository();