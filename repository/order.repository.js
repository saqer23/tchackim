const  Order  = require('../model/Order.model.js');

class OrderRepository {

    

    async getOrders() {
        const orders = await Order.find().populate({path:"orderItem user"});
        return orders;
    }

    async getOrder(orderId) {
        const order = await Order.findOne({orderId});
        return order;
    }

    async createOrder(order) {
        let data = {};
        try {
            data = await Order.create(order);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateOrder(order) {
        let data = {};
        try {
            data = await Order.findByIdAndUpdate(order.params.orderId,{ $set:order.body });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteOrder(orderId) {
        let data = {};
        try {
            data = await Order.findByIdAndDelete(orderId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new OrderRepository();