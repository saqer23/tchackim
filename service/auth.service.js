const authRepository  = require('../repository/auth.repository.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const packge = require('../repository/pakge.repository.js')

class AuthService{
    async register(user){
        const pk = await packge.createPakge({
            pakgeName:'free',
            pakgePrice:0,
            pakgePeriod:new Date,
            packgeAmount:2
        })
        const salt = await bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.body.password, salt)
        try{
        const auth = {
            email:user.body.email,
            firstName:user.body.firstName,
            lastName:user.body.lastName,
            phoneNo:user.body.phoneNo,
            address:user.body.address,
            packgeId:pk._id,
            password:hash,
            profileImg:"no",
            }
        // if(user.file){
        //     auth.profileImg = user.file.destination+user.file.filename
        // }
        return await authRepository.register(auth);
    }catch(err){
        console.log(err);
        return 'err'
    }    
    }

    async getUserById(userId){
        return authRepository.getUserById(userId)
    }

    async login(user){
        const user1 = await authRepository.login(user)
        console.log("user1::",user1)
        if(!user1){
            return (404,'user not found')
        } 

        const isPassword = await bcrypt.compare(user.password,user1.password)
        if(!isPassword) return (401,'wrong password')

        const token = jwt.sign({id:user1._id,isAdmin:user1.isAdmin},process.env.JWT)
        console.log("token::",token)
        
        return [token,user1]
        // return callBack
    }

    async updateUser(user) {
        const auth = {
            email:user.body.email,
            firstName:user.body.firstName,
            lastName:user.body.lastName,
            phoneNo:user.params.userId,
            address:user.body.address,
        }
        if(user.file){
            auth.profileImg = user.file.destination+user.file.filename
        }
        user.body = auth
        return await authRepository.updateUser(user);
    }
    async forgetPassword(user) {
        const salt = await bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.body.password, salt)

        const auth = {
            phoneNo:user.body.phoneNo,
            email:user.body.email,
            password:hash
        }
        user.body = auth
        return await authRepository.forgetPassword(user);
    }
}
 
module.exports = new AuthService();