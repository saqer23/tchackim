const orderItemController = require('../controller/orderItem.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    orderItemController.createOrderItem(req.body).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    orderItemController.getOrderItems().then(data => res.status(200).json(data))
});
;
router.get("/:orderItemId",verifyToken,(req,res)=>{
    orderItemController.getOrderItem(req.params.orderItemId).then(data => res.status(200).json(data))
});;
router.put("/:orderItemId",verifyToken,(req,res)=>{
    orderItemController.updateOrderItem(req).then(data => res.status(200).json(data))
});;
router.delete("/:orderItemId",verifyToken,(req,res)=>{
    orderItemController.deleteOrderItem(req.params.orderItemId).then(data => res.status(200).json(data))
});



module.exports = router;