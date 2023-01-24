const  Location  = require('../model/Location.model.js');

class LocationRepository {

    

    async getLocations() {
        const categories = await Location.find();
        return categories;
    }

    async getLocation(locationId) {
        const location = await Location.findOne({locationId});
        return location;
    }

    async createLocation(location) {
        let data = {};
        try {
            data = await Location.create(location);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateLocation(location) {
        let data = {};
        try {
            data = await Location.findByIdAndUpdate(location.params.locationId,{$set:location.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteLocation(locationId) {
        let data = {};
        try {
            data = await Location.findByIdAndDelete(locationId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new LocationRepository();