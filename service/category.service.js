const categoryRepository  = require('../repository/category.repository');

class CategoryService {

    constructor() {}

    async getCategories() {
        return await categoryRepository.getCategories();
    }

    async createCategory(category) {
        return await categoryRepository.createCategory(category);
    }

    async updateCategory(category) {
        return await categoryRepository.updateCategory(category);
    }

    async deleteCategory(categoryId) {
        return await categoryRepository.deleteCategory(categoryId);
    }

    async getCategory(categoryId) {
        return await categoryRepository.getCategory(categoryId);
    }
}

module.exports = new CategoryService();