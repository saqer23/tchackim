const authService  = require('../service/auth.service.js');

class AuthController{
    async register(user){
        return await authService.register(user)
    }

    async login(user){
        return await authService.login(user)
    }

    async updateUser(user) {
        return await authService.updateUser(user);
    }
    async forgetPassword(user) {
        return await authService.forgetPassword(user);
    }
}

module.exports = new AuthController();