const orderItemService  = require('../service/orderItem.service.js');


class OrderItemController {

    async getOrderItems() {
        return await orderItemService.getOrderItems();
    }

    async createOrderItem(orderItem) {
        return await orderItemService.createOrderItem(orderItem);
    }

    async updateOrderItem(orderItem) {
        return await orderItemService.updateOrderItem(orderItem);
    }

    async deleteOrderItem(orderItemId) {
        return await orderItemService.deleteOrderItem(orderItemId);
    }

    async getOrderItem(orderItemId) {
        return await orderItemService.getOrderItem(orderItemId);
    }
}
module.exports = new OrderItemController();