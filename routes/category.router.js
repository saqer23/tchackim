const categoryController = require('../controller/category.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')
const {upload} = require('../utils/uploadCategoryImg.js')

const router = express.Router();


router.post("/create",verifyToken,upload,(req,res)=>{
    categoryController.createCategory(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    categoryController.getCategories().then(data => res.status(200).json(data))
});
;
router.get("/:categoryId",verifyToken,(req,res)=>{
    categoryController.getCategory(req.params.categoryId).then(data => res.status(200).json(data))
});
router.put("/:categoryId",verifyToken,upload,(req,res)=>{
    categoryController.updateCategory(req).then(data => res.status(200).json(data))
});
router.delete("/:categoryId",verifyToken,(req,res)=>{
    categoryController.deleteCategory(req.params.categoryId).then(data => res.status(200).json(data))
});



module.exports = router;