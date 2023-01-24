const auctionService  = require('../service/auction.service');


class AuctionController {

    async getAuctions() {
        return await auctionService.getAuctions();
    }

    async createAuction(auction) {
        return await auctionService.createAuction(auction);
    }

    async updateAuction(auction) {
        return await auctionService.updateAuction(auction);
    }

    async deleteAuction(auctionId) {
        return await auctionService.deleteAuction(auctionId);
    }

    async getAuction(auctionId) {
        return await auctionService.getAuction(auctionId);
    }
}
module.exports = new AuctionController();