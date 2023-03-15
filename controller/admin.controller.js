const Admin = require('../model/AdminAllowed')
class AdminController {

    async getAdmins() {
        return await Admin.find()
    }

    async createAdmins(req) {
        return await Admin.create(req.body)
    }

    async updateAdmins(req) {
        return await Admin.findByIdAndUpdate(req.params.adminId,{$set:req.body})
    }

}
module.exports = new AdminController();
