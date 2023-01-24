const  Pakge  = require('../model/Pakge.model.js');

class PakgeRepository {

    

    async getPakges() {
        const pakges = await Pakge.find();
        return pakges;
    }

    async getPakge(pakgeId) {
        const pakge = await Pakge.findOne({pakgeId});
        return pakge;
    }

    async createPakge(pakge) {
        let data = {};
        try {
            data = await Pakge.create(pakge);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updatePakge(pakge) {
        let data = {};
        try {
            data = await Pakge.findByIdAndUpdate(pakge.params.pakgeId,{ $set:pakge.body });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deletePakge(pakgeId) {
        let data = {};
        try {
            data = await Pakge.findByIdAndDelete(pakgeId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new PakgeRepository();