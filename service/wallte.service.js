const wallteRepository  = require('../repository/wallte.respository.js');

class WallteService {

    constructor() {}

    async getWalltes() {
        return await wallteRepository.getWallets();
    }

    
    async getWallte(wallteId) {
        return await wallteRepository.getWallte(wallteId);
    }
    async updateWallte(auction) {
        return await wallteRepository.updateWallte(auction);
    }
}

module.exports = new WallteService();