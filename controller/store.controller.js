const storeService  = require('../service/store.service');


class StoreController {

    async getStores() {
        return await storeService.getStores();
    }

    async createStore(store) {
        return await storeService.createStore(store);
    }

    async updateStore(store) {
        return await storeService.updateStore(store);
    }

    async deleteStore(storeId) {
        return await storeService.deleteStore(storeId);
    }

    async getStore(storeId) {
        return await storeService.getStore(storeId);
    }
}
module.exports = new StoreController();