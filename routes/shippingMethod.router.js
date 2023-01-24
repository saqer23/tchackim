const shippingMethodController = require('../controller/shippingMethod.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    shippingMethodController.createShippingMethod(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    shippingMethodController.getShippingMethods().then(data => res.status(200).json(data))
});
;
router.get("/:shippingMethodId",verifyToken,(req,res)=>{
    shippingMethodController.getShippingMethod(req.params.shippingMethodId).then(data => res.status(200).json(data))
});
router.put("/:shippingMethodId",verifyToken,(req,res)=>{
    shippingMethodController.updateShippingMethod(req).then(data => res.status(200).json(data))
});
router.delete("/:shippingMethodId",verifyToken,(req,res)=>{
    shippingMethodController.deleteShippingMethod(req.params.shippingMethodId).then(data => res.status(200).json(data))
});



module.exports = router;