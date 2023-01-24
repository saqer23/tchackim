const locationRepository  = require('../repository/location.repository');

class LocationService {

    constructor() {}

    async getLocations() {
        return await locationRepository.getLocations();
    }

    async createLocation(location) {
        return await locationRepository.createLocation(location);
    }

    async updateLocation(location) {
        return await locationRepository.updateLocation(location);
    }

    async deleteLocation(locationId) {
        return await locationRepository.deleteLocation(locationId);
    }

    async getLocation(locationId) {
        return await locationRepository.getLocation(locationId);
    }
}

module.exports = new LocationService();