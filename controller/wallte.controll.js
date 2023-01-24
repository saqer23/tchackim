const wallteService  = require('../service/wallte.service');


class WallteController {

    async getWalltes() {
        return await wallteService.getWalltes();
    }

    async getWallte(wallteId) {
        return await wallteService.getWallte(wallteId);
    }
    async updateWallte(auction) {
        return await wallteService.updateWallte(auction);
    }
}
module.exports = new WallteController();