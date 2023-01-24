const paymentMethodController = require('../controller/paymentMethod.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    paymentMethodController.createPaymentMethod(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    paymentMethodController.getPaymentMethods().then(data => res.status(200).json(data))
});
;
router.get("/:paymentMethodId",verifyToken,(req,res)=>{
    paymentMethodController.getPaymentMethod(req.params.paymentMethodId).then(data => res.status(200).json(data))
});
router.put("/:paymentMethodId",verifyToken,(req,res)=>{
    paymentMethodController.updatePaymentMethod(req).then(data => res.status(200).json(data))
});
router.delete("/:paymentMethodId",verifyToken,(req,res)=>{
    paymentMethodController.deletePaymentMethod(req.params.paymentMethodId).then(data => res.status(200).json(data))
});



module.exports = router;