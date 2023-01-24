const shippingController = require('../controller/shipping.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    shippingController.createShipping(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    shippingController.getShippings().then(data => res.status(200).json(data))
});
;
router.get("/:shippingId",verifyToken,(req,res)=>{
    shippingController.getShipping(req.params.shippingId).then(data => res.status(200).json(data))
});
router.put("/:shippingId",verifyToken,(req,res)=>{
    shippingController.updateShipping(req).then(data => res.status(200).json(data))
});
router.delete("/:shippingId",verifyToken,(req,res)=>{
    shippingController.deleteShipping(req.params.shippingId).then(data => res.status(200).json(data))
});



module.exports = router;