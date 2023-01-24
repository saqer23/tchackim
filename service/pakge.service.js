const pakgeRepository  = require('../repository/pakge.repository');

class PakgeService {

    constructor() {}

    async getPakges() {
        return await pakgeRepository.getPakges();
    }

    async createPakge(pakge) {
        return await pakgeRepository.createPakge(pakge);
    }

    async updatePakge(pakge) {
        return await pakgeRepository.updatePakge(pakge);
    }

    async deletePakge(pakgeId) {
        return await pakgeRepository.deletePakge(pakgeId);
    }

    async getPakge(pakgeId) {
        return await pakgeRepository.getPakge(pakgeId);
    }
}

module.exports = new PakgeService();