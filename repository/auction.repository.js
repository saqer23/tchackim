const  Auction  = require('../model/Auction.model.js');
const jwt = require("jsonwebtoken");

class AuctionRepository {
    async getAuctions() {
        const auctions = await Auction.find().populate({path:"userId productId"});
        return auctions;
    }

    async getAuction(auctionId) {
        const auction = await Auction.findById(auctionId).populate({path:"userId productId"});
        return auction;
    }

    async createAuction(auction) {
        let data = {};
        const token = auction.headers.authorization.split(' ')[1]
        if(!token){
            return 'error'
        }
        const decodedToken = jwt.verify(token,process.env.JWT );
        try {
            data = await Auction.create({
                userId:decodedToken.id,
                endDate:auction.body.endDate,
                productId:auction.body.productId,
                price:auction.body.price
            });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateAuction(auction) {
        let data = {};
        let auc = {}
        const token = auction.headers.authorization.split(' ')[1]
        if(!token){
            return 'error'
        }
        const decodedToken = jwt.verify(token,process.env.JWT );
        try {
            auc = await Auction.findById(auction.params.auctionId)
            if(auction.body.price){   
                if(auction.body.price > auc.price){
                    data = await Auction.findByIdAndUpdate(auction.params.auctionId,{$set:{
                        userId:decodedToken.id,
                        price:auction.body.price
                    }})
                    return data;
                }else{
                    data = {mes:"sory there a bigger price"}
                    return data;
                }
            }else{
                data = await Auction.findByIdAndUpdate(auction.params.auctionId,{$set:auction.body})
                return data;
            }
        } catch(err) {
            console.log('Error::' + err);
        }
    }

    async deleteAuction(auctionId) {
        let data = {};
        try {
            data = await Auction.findByIdAndDelete(auctionId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

}

module.exports = new AuctionRepository();