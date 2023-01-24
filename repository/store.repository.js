const jwt = require("jsonwebtoken");
const  Store  = require('../model/Store.model.js');

class StoreRepository {

     

    async getStores() {
        const stores = await Store.find().populate({path:"packageId storeUsers storeAdminId location"});
        return stores;
    }

    async getStore(storeId) {
        const store = await Store.findById(storeId).populate({path:"packageId storeUsers storeAdminId location"});
        return store;
    }

    async createStore(store) {
        let data = {};
        const token = store.headers.authorization.split(' ')[1]
        if(!token){
            return 'error'
        }
        const decodedToken = jwt.verify(token,process.env.JWT );
        try {
            data = await Store.create({
                storeName:store.body.storeName,
                logo:store.files[0].destination+store.files[0].filename,
                avatar:store.files[1].destination+store.files[1].filename,
                packageId:store.body.packageId,
                storeType:store.body.storeType,
                discrption:store.body.discrption,
                storeActivty:store.body.storeActivty,
                location:store.body.location,
                storeAdminId:decodedToken.id,
            });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateStore(store) {
        let data = {};
        try {
            data = await Store.findByIdAndUpdate(store.params.storeId,{$set:store.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteStore(storeId) {
        let data = {};
        try {
            data = await Store.findByIdAndDelete(storeId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new StoreRepository();