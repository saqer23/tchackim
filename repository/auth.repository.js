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
        console.log(user.body)
        try {
            user1 = await (await User.findOne({phoneNo:user.params.userId}))
            data = await User.findByIdAndUpdate(user1._id,{$set:user.body})

        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
}

module.exports = new AuthRepository();