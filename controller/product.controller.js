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
}
module.exports = new ProductController();