const paymentController = require('../controller/payment.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    paymentController.createPayment(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    paymentController.getPayments().then(data => res.status(200).json(data))
});
;
router.get("/:paymentId",verifyToken,(req,res)=>{
    paymentController.getPayment(req.params.paymentId).then(data => res.status(200).json(data))
});
router.put("/:paymentId",verifyToken,(req,res)=>{
    paymentController.updatePayment(req).then(data => res.status(200).json(data))
});
router.delete("/:paymentId",verifyToken,(req,res)=>{
    paymentController.deletePayment(req.params.paymentId).then(data => res.status(200).json(data))
});



module.exports = router;