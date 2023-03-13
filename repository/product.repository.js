const Product = require('../model/Product.model.js');
const User = require('../model/User.model.js');
const jwt = require("jsonwebtoken");

class ProductRepository {



    async getProducts() {
        const products = await Product.find().populate({ path: "categoryId userId keyWordId storeId" });
        return products;
    }

    async getProduct(productId) {
        const product = await Product.findById(productId).populate({ path: "categoryId userId keyWordId storeId" });
        return product;
    }

    async createProduct(product) {
        let data = {};
        const img = []

        const token = product.headers.authorization.split(' ')[1]
        if (!token) {
            return 'error'
        }
        const decodedToken = jwt.verify(token, process.env.JWT);
        for (var i in product.files) {
            img.push(product.files[i].destination + product.files[i].filename)
        }
        try {
            data = await Product.create({
                productName: product.body.productName,
                productImg: img,
                discountPercent: product.body.discountPercent,
                discountCode: product.body.discountCode,
                productCode: product.body.productCode,
                rate: product.body.rate,
                price: product.body.price,
                userId: decodedToken.id,
                storeId: product.body.storeId,
                quantity: product.body.quantity,
                active: product.body.active,
                description: product.body.description,
                categoryId: product.body.categoryId,
                keyWordId: product.body.keyWordId,
                type: product.body.type,
                endDate: product.body.endDate,
                oldNew: product.body.oldNew,
                deliveryType: product.body.deliveryType,
                shippingAllow: product.body.shippingAllow,
                chatAllow: product.body.chatAllow
            });
        } catch (err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateProduct(product) {
        let data = {};
        try {
            data = await Product.findByIdAndUpdate(product.params.productId, { $set: product.body });
        } catch (err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteProduct(product) {
        let data = {};
        try {
            data = await Product.findByIdAndDelete(product);
        } catch (err) {
            console.log('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

    async getByQuery(query) {
        return await Product.find(
            {
                "$or": [
                    { productName: { $regex: query.productName } }
                ]
            }
        )
    }

    async getProductsSortedBig() {
        return await Product.find({}, null, { sort: { price: 1 } }).populate({ path: "categoryId userId keyWordId storeId" });
    }

    async getProductsSortedSmall() {
        return await Product.find({}, null, { sort: { price: -1 } }).populate({ path: "categoryId userId keyWordId storeId" });
    }
    async getProductsQurey(req) {
        let { priceG, priceL, city, circle } = req.body
        let products = []
        let product = {}
        if (!priceG) {
            priceG = 0
        }
        if (!priceL) {
            priceL = 99999999999
        }

        const prod = await Product.find({
            price: { $lte: priceL, $gte: priceG }
        }).populate({ path: "categoryId userId keyWordId storeId location" });

        if (circle && city) {
            for (let i in prod) {
                for (let j in prod[i].location) {
                    if ((city === prod[i].location[j].city) && (circle === prod[i].location[j].circle)) {
                        products.push(prod[i])
                    }
                }
            }
        } else if (city) {
            for (let i in prod) {
                for (let j in prod[i].location) {
                    if ((city === prod[i].location[j].city)) {
                        products.push(prod[i])
                    }
                }
            }
        } else if (circle) {
            for (let i in prod) {
                for (let j in prod[i].location) {
                    if ((circle === prod[i].location[j].circle)) {
                        products.push(prod[i])
                    }
                }
            }
        }else{
            return prod
        }

        return products
    }
}

module.exports = new ProductRepository();