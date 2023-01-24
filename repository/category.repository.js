const  Category  = require('../model/Category.model.js');
const jwt = require("jsonwebtoken");

class CategoryRepository {

    

    async getCategories() {
        const categories = await Category.find();
        return categories;
    }

    async getCategory(categoryId) {
        const category = await Category.findOne({categoryId});
        return category;
    }

    async createCategory(category) {
            let data = {};
        const token = category.headers.authorization.split(' ')[1]
        if(!token){
            return 'error'
        }
        const decodedToken = jwt.verify(token,process.env.JWT );
        try {
            if(category.file){
                data = await Category.create({
                    userId:decodedToken.id,
                    categoryName:category.body.categoryName,
                    categoryCode:category.body.categoryCode,
                    categoryImg:category.file.destination+category.file.filename
                });
            }else{
                data = await Category.create({
                    userId:decodedToken.id,
                    categoryName:category.body.categoryName,
                    categoryCode:category.body.categoryCode
                })
            }
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateCategory(category) {
        let data = {};
        try {
            data = await Category.findByIdAndUpdate(category.params.categoryId,{$set:category.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteCategory(categoryId) {
        let data = {};
        try {
            data = await Category.findByIdAndDelete(categoryId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new CategoryRepository();