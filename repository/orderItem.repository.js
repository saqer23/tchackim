const  OrderItem  = require('../model/OrderItem.model.js');

class OrderItemRepository {

    

    async getOrderItems() {
        const orderItems = await OrderItem.find().populate({path:"product"});
        return orderItems;
    }

    async getOrderItem(orderItemId) {
        const orderItems = await OrderItem.findOne({orderItemId}).populate({path:"product"});
        return orderItems;
    }

    async createOrderItem(orderItem) {
        let data = {};
        try {
            data = await OrderItem.create(orderItem);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateOrderItem(orderItem) {
        let data = {};
        try {
            data = await OrderItem.findByIdAndUpdate(orderItem.params.orderItemId,{ $set:orderItem.body });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteOrderItem(orderItemId) {
        let data = {};
        try {
            data = await OrderItem.findByIdAndDelete(orderItemId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new OrderItemRepository();