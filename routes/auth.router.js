const authController = require('../controller/auth.controller.js')
const express = require("express")
const { uploadProfile } = require('../utils/uploadImage.js')


const router = express.Router();

router.post("/register",uploadProfile,(req,res)=>{
    authController.register(req).then(data => res.status(200).json(data))});
// router.post("/login",authController.login(req));
router.post("/login",(req,res)=>{
    authController.login(req.body).then(data => res.cookie("access_token",data[0],{httpOnly:true,secure:true,sameSite:"none"}).status(200).json(data[1]))
});
router.put("/:userId",uploadProfile,(req,res)=>{
    authController.updateUser(req).then(data => res.status(200).json(data))
});
router.get("/:userId",(req,res)=>{
    authController.getUserById(req.params.userId).then(data => res.status(200).json(data))
});
//forgetPassword
router.put("/user/forget-password",(req,res)=>{
    authController.forgetPassword(req).then(data => res.status(200).json(data))
});
module.exports = router;