const categoryService  = require('../service/category.service');


class CategoryController {

    async getCategories() {
        return await categoryService.getCategories();
    }

    async createCategory(category) {
        return await categoryService.createCategory(category);
    }

    async updateCategory(category) {
        return await categoryService.updateCategory(category);
    }

    async deleteCategory(categoryId) {
        return await categoryService.deleteCategory(categoryId);
    }

    async getCategory(categoryId) {
        return await categoryService.getCategory(categoryId);
    }
}
module.exports = new CategoryController();