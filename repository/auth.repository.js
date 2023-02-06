const User = require("../model/User.model.js")
const wallteRepository  = require('../repository/wallte.respository.js');
const follwers  = require('../controller/follwers.controller.js');


class AuthRepository {

    async register(user){
        let data ={}
        const wallte = {}
        let folwer = {}
        try {
            data = await User.create(user);
            folwer = await follwers.createFollwers(data)
            wallte = await wallteRepository.createWallet(data)
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }


    async getUserById(userId){
        let data = {}
        try{
            data = await User.findById(userId)
        }catch(err){
            console.log(err);
        }
        return data
    }

    async login(user) {
        const auth = await User.findOne({phoneNo:user.phoneNo});
        return auth;
    }

    async updateUser(user) {
        let data = {};
        let user1 = {};
        try {
            user1 = await User.findOne({phoneNo:user.body.phoneNo})
            user1.firstName = user.body.firstName
            user1.lastName = user.body.lastName
            user1.address = user.body.address
            user1.profileImg = user.body.profileImg
            user1.email = user.body.email
            
            await user1.save()
        } catch(err) {
            console.log('Error::' + err);
        }
        return user1;
    }
}

module.exports = new AuthRepository();