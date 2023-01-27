const keyWordController = require('../controller/keyWord.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();



router.post("/create",verifyToken,(req,res)=>{
    keyWordController.createKeyWord(req.body).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    keyWordController.getKeyWords().then(data => res.status(200).json(data))
});
;
router.get("/:keyWordId",verifyToken,(req,res)=>{
    keyWordController.getKeyWord(req.params.keyWordId).then(data => res.status(200).json(data))
});;
router.put("/:keyWordId",verifyToken,(req,res)=>{
    keyWordController.updateKeyWord(req).then(data => res.status(200).json(data))
});;
router.delete("/:keyWordId",verifyToken,(req,res)=>{
    keyWordController.deleteKeyWord(req.params.keyWordId).then(data => res.status(200).json(data))
});



module.exports = router;