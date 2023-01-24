const auctionController = require('../controller/auction.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyToken,(req,res)=>{
    auctionController.createAuction(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    auctionController.getAuctions().then(data => res.status(200).json(data))
});
router.get("/:auctionId",verifyToken,(req,res)=>{
    auctionController.getAuction(req.params.auctionId).then(data => res.status(200).json(data))
});
router.put("/:auctionId",verifyToken,(req,res)=>{
    auctionController.updateAuction(req).then(data => res.status(200).json(data))
});
router.delete("/:auctionId",verifyToken,(req,res)=>{
    auctionController.deleteAuction(req.params.auctionId).then(data => res.status(200).json(data))
});



module.exports = router;