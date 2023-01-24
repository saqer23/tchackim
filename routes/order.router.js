const orderController = require('../controller/order.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    orderController.createOrder(req.body).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    orderController.getOrders().then(data => res.status(200).json(data))
});
;
router.get("/:orderId",verifyToken,(req,res)=>{
    orderController.getOrder(req.params.orderId).then(data => res.status(200).json(data))
});;
router.put("/:orderId",verifyToken,(req,res)=>{
    orderController.updateOrder(req).then(data => res.status(200).json(data))
});;
router.delete("/:orderId",verifyToken,(req,res)=>{
    orderController.deleteOrder(req.params.orderId).then(data => res.status(200).json(data))
});



module.exports = router;