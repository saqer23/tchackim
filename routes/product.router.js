const productController = require('../controller/product.controller.js')
const express = require("express")
// const verify = require('../utils/verifyToken.js')
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')
// const { allowShare } = require('../utils/allowShare.js')
const {upload} = require('../utils/uploadImage.js')

 
const router = express.Router();


router.post("/create",verifyToken,upload,(req,res)=>{
    productController.createProduct(req).then(data => res.status(200).json(data))
});

router.get("/",verifyToken,(req,res)=>{
    productController.getProducts().then(data => res.status(200).json(data))
});
;
router.get("/:productId",verifyToken,(req,res)=>{
    productController.getProduct(req.params.productId).then(data => res.status(200).json(data))
});;
router.put("/:productId",verifyToken,(req,res)=>{
    productController.updateProduct(req).then(data => res.status(200).json(data))
});;
router.delete("/:productId",verifyToken,(req,res)=>{
    productController.deleteProduct(req.params.productId).then(data => res.status(200).json(data))
});

router.get("/pro/search",verifyToken,(req,res)=>{
    productController.getByQuery(req.query).then(data => res.status(200).json(data))
});

module.exports = router;