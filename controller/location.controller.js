const locationService  = require('../service/location.service');


class LocationController {

    async getLocations() {
        return await locationService.getLocations();
    }

    async createLocation(location) {
        return await locationService.createLocation(location);
    }

    async updateLocation(location) {
        return await locationService.updateLocation(location);
    }

    async deleteLocation(locationId) {
        return await locationService.deleteLocation(locationId);
    }

    async getLocation(locationId) {
        return await locationService.getLocation(locationId);
    }
}
module.exports = new LocationController();