const productService  = require('../service/product.service');


class ProductController {

    async getProducts() {
        return await productService.getProducts();
    }
    async getByQuery(query){
        return await productService.getByQuery(query)
    }
    async createProduct(product) {
        return await productService.createProduct(product);
    }

    async updateProduct(product) {
        return await productService.updateProduct(product);
    }

    async deleteProduct(productId) {
        return await productService.deleteProduct(productId);
    }

    async getProduct(productId) {
        return await productService.getProduct(productId);
    }

    async getProductsSortedBig() {
        return await productService.getProductsSortedBig();
    }

    async getProductsSortedSmall() {
        return await productService.getProductsSortedSmall();
    }
    async getProductsQurey(req) {
        return await productService.getProductsQurey(req);
    }
}
module.exports = new ProductController();