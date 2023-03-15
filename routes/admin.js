const adminController = require('../controller/admin.controller')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();


router.post("/create",(req,res)=>{
    adminController.createAdmins(req).then(data => res.status(200).json(data))
});
router.get("/",(req,res)=>{
    adminController.getAdmins().then(data => res.status(200).json(data))
});
router.put("/:adminId",(req,res)=>{
    adminController.updateAdmins(req).then(data => res.status(200).json(data))
});



module.exports = router;