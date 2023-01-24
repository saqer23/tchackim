const Follwers = require('../model/Follwers.model')

class FollwersController{
    async createFollwers(id){
        let data = {}
        try{
            data = await Follwers.create({userId:id._id})
        }catch{
            throw Error('something went error')
        }
        return data
    }
    async getFollwers(req){
        let data = {}
        let data1 = {}
        try{
            data = await (await Follwers.findOne({userId:req.user.id})).populate({path:"userId users"})
            if(await (await Follwers.findOne({users:req.user.id}))){
                data1 = await (await Follwers.findOne({users:req.user.id})).populate({path:"userId users"})

            }

        }catch{
            throw Error('something went error')
        }
        return [{"follers":data},{"folling":data1}]
    }
    async getFollwersId(id){
        let data = {}
        let data1 = {}
        try{
            data = await Follwers.findOne({userId:id}).populate({path:"userId users"})
            if(await (await Follwers.findOne({users:id}))){
                data1 = await (await Follwers.findOne({users:id})).populate({path:"users"})
            }
        }catch{
            throw Error('something went error')
        }
        return [{"follers":data},{"folling":data1}]
    }

    async updateFollwers(req){
        let data = {}
        const id = req.params.userId
        try{
            data = await Follwers.findOne({userId:id})
            if(!(await Follwers.findOne({userId:id,users:req.user.id}))){
            data.users.push(req.user.id)
            await data.save()
            }else{
                return "alredy exist"
            }
        }catch{
            throw Error('something went error')
        }
        return data
    }
    async unFollwers(req){
        let data = {}
        const id = req.params.userId
        try{
            data = await Follwers.findOne({userId:id})
            if((await Follwers.findOne({userId:id,users:req.user.id}))){
            for(var i in data.users){
                if(data.users[i] == req.user.id){
                    data.users.splice(i,1)
                }
            }

            await data.save()
            }else{
                return "alredy exist"
            }
        }catch{
            throw Error('something went error')
        }
        return data
    }
}

module.exports = new FollwersController();