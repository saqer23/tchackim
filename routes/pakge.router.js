const pakgeController = require('../controller/pakge.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",verifyUsrt,(req,res)=>{
    pakgeController.createPakge(req.body).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    pakgeController.getPakges().then(data => res.status(200).json(data))
});
;
router.get("/:pakgeId",verifyToken,(req,res)=>{
    pakgeController.getPakge(req.params.pakgeId).then(data => res.status(200).json(data))
});;
router.put("/:pakgeId",verifyUsrt,(req,res)=>{
    pakgeController.updatePakge(req).then(data => res.status(200).json(data))
});;
router.delete("/:pakgeId",verifyUsrt,(req,res)=>{
    pakgeController.deletePakge(req.params.pakgeId).then(data => res.status(200).json(data))
});



module.exports = router;