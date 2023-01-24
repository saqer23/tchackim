const storeRepository  = require('../repository/store.repository');

class StoreService {

    constructor() {}

    async getStores() {
        return await storeRepository.getStores();
    }

    async createStore(store) {
        return await storeRepository.createStore(store);
    }

    async updateStore(store) {
        return await storeRepository.updateStore(store);
    }

    async deleteStore(storeId) {
        return await storeRepository.deleteStore(storeId);
    }

    async getStore(storeId) {
        return await storeRepository.getStore(storeId);
    }
}

module.exports = new StoreService();