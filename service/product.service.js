const productRepository  = require('../repository/product.repository');

class ProductService {

    constructor() {}

    async getProducts() {
        return await productRepository.getProducts();
    }

    async createProduct(product) {
        return await productRepository.createProduct(product);
    }
    async getByQuery(query){
        return await productRepository.getByQuery(query)
    }
    async updateProduct(product) {
        return await productRepository.updateProduct(product);
    }

    async deleteProduct(productId) {
        return await productRepository.deleteProduct(productId);
    }

    async getProduct(productId) {
        return await productRepository.getProduct(productId);
    }
    async getProductsSortedBig() {
        return await productRepository.getProductsSortedBig();
    }

    async getProductsSortedSmall() {
        return await productRepository.getProductsSortedSmall();
    }
    async getProductsQurey(req) {
        return await productRepository.getProductsQurey(req);
    }
}

module.exports = new ProductService();