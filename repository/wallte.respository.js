const Wallte = require("../model/Wallet.model.js")

class AuthRepository {

    async createWallet(user){
        let data ={}
        try {
            data = await Wallte.create({
                user:user 
            });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async getWallte(wallte) {
        const data = await Wallte.findById(wallte).populate({path:"user"});
        return data;
    }

    async getWallets() {
        const wallte = await Wallte.find().populate({path:"user"});
        return wallte;
    }

    async updateWallte(wallte) {
        let data = {};

        try {
            data = await Wallte.findByIdAndUpdate(wallte.params.wallteId,{$set:wallte.body})

        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new AuthRepository();