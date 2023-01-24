const auctionRepository  = require('../repository/auction.repository');

class AuctionService {

    constructor() {}

    async getAuctions() {
        return await auctionRepository.getAuctions();
    }

    async createAuction(auction) {
        return await auctionRepository.createAuction(auction);
    }

    async updateAuction(auction) {
        return await auctionRepository.updateAuction(auction);
    }

    async deleteAuction(auctionId) {
        return await auctionRepository.deleteAuction(auctionId);
    }

    async getAuction(auctionId) {
        return await auctionRepository.getAuction(auctionId);
    }
}

module.exports = new AuctionService();