const pakgeService  = require('../service/pakge.service');


class PakgeController {

    async getPakges() {
        return await pakgeService.getPakges();
    }

    async createPakge(pakge) {
        return await pakgeService.createPakge(pakge);
    }

    async updatePakge(pakge) {
        return await pakgeService.updatePakge(pakge);
    }

    async deletePakge(pakgeId) {
        return await pakgeService.deletePakge(pakgeId);
    }

    async getPakge(pakgeId) {
        return await pakgeService.getPakge(pakgeId);
    }
}
module.exports = new PakgeController();