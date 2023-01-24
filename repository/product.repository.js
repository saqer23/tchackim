const  Product  = require('../model/Product.model.js');
const User = require('../model/User.model.js');
const jwt = require("jsonwebtoken");

class ProductRepository {

    

    async getProducts() {
        const products = await Product.find().populate({path:"categoryId userId keyWordId storeId"});
        return products;
    }

    async getProduct(productId) {
        const product = await Product.findById(productId).populate({path:"categoryId userId keyWordId storeId"});
        return product;
    }

    async createProduct(product) {
        let data = {};
        const img = []
        
        const token = product.headers.authorization.split(' ')[1]
        if(!token){
            return 'error'
        }
        const decodedToken = jwt.verify(token,process.env.JWT );
        for(var i in product.files){
        img.push(product.files[i].destination+product.files[i].filename)
        }
        try {
            data = await Product.create({
                productName:product.body.productName,
                productImg:img,
                discountPercent:product.body.discountPercent,
                discountCode:product.body.discountCode,
                productCode:product.body.productCode,
                rate:product.body.rate,
                price:product.body.price,
                userId:decodedToken.id,
                storeId:product.body.storeId,
                quantity:product.body.quantity,
                active:product.body.active,
                description:product.body.description,
                categoryId:product.body.categoryId,
                keyWordId:product.body.keyWordId,
                type:product.body.type,
                endDate:product.body.endDate
            });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateProduct(product) {
        let data = {};
        try {
            data = await Product.findByIdAndUpdate(product.params.productId,{ $set:product.body });
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }
 
    async deleteProduct(product) {
        let data = {};
        try {
            data = await Product.findByIdAndDelete(product);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

    async getByQuery(query){
        return await Product.find(
            {
                "$or":[
                    {productName:{$regex:query.productName}}
                ]
            }
        )
    }

}

module.exports = new ProductRepository();