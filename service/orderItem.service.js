const orderItemRepository  = require('../repository/orderItem.repository');

class OrderItemService {

    constructor() {}

    async getOrderItems() {
        return await orderItemRepository.getOrderItems();
    }

    async createOrderItem(orderItem) {
        return await orderItemRepository.createOrderItem(orderItem);
    }

    async updateOrderItem(orderItem) {
        return await orderItemRepository.updateOrderItem(orderItem);
    }

    async deleteOrderItem(orderItemId) {
        return await orderItemRepository.deleteOrderItem(orderItemId);
    }

    async getOrderItem(orderItemId) {
        return await orderItemRepository.getOrderItem(orderItemId);
    }
}

module.exports = new OrderItemService();