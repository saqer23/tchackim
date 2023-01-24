const authRepository  = require('../repository/auth.repository.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService{
    async register(user){
        const salt = await bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.password, salt)

        const auth = {
            email:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            phoneNo:user.phoneNo,
            address:user.address,
            password:hash,
            packgeId:user.packgeId,
        }
        return await authRepository.register(auth);
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
            phoneNo:user.body.phoneNo,
            address:user.body.address,
            packgeId:user.packgeId,
        }
        user.body = auth
        return await authRepository.updateUser(user);
    }
    async forgetPassword(user) {
        const salt = await bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(user.body.password, salt)

        const auth = {
            password:hash
        }
        user.body = auth
        return await authRepository.updateUser(user);
    }
}
 
module.exports = new AuthService();