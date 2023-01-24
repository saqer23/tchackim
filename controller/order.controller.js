const orderService  = require('../service/order.service');


class OrderController {

    async getOrders() {
        return await orderService.getOrders();
    }

    async createOrder(order) {
        return await orderService.createOrder(order);
    }

    async updateOrder(order) {
        return await orderService.updateOrder(order);
    }

    async deleteOrder(orderId) {
        return await orderService.deleteOrder(orderId);
    }

    async getOrder(orderId) {
        return await orderService.getOrder(orderId);
    }
}
module.exports = new OrderController();