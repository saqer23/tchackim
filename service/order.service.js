const orderRepository  = require('../repository/order.repository');

class OrderService {

    constructor() {}

    async getOrders() {
        return await orderRepository.getOrders();
    }

    async createOrder(order) {
        return await orderRepository.createOrder(order);
    }

    async updateOrder(order) {
        return await orderRepository.updateOrder(order);
    }

    async deleteOrder(orderId) {
        return await orderRepository.deleteOrder(orderId);
    }

    async getOrder(orderId) {
        return await orderRepository.getOrder(orderId);
    }
}

module.exports = new OrderService();