const wallteController = require('../controller/wallte.controll.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();



router.get("/",verifyToken,(req,res)=>{
    wallteController.getWalltes().then(data => res.status(200).json(data))
});
;
router.get("/:wallteId",verifyToken,(req,res)=>{
    wallteController.getWallte(req.params.wallteId).then(data => res.status(200).json(data))
});;
router.put("/:wallteId",verifyToken,(req,res)=>{
    wallteController.updateWallte(req).then(data => res.status(200).json(data))
});




module.exports = router;