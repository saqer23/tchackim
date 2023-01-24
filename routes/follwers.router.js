const follwerController = require('../controller/follwers.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

//ملاحظة :كل العمليات لازم تكون مسجل دخول + لازم تسوي حساب جديد اول شحبل ارجع سوي حساب اعرف انك ما سويت ):
const router = express.Router();

//هنا تمرر اي دي اليوزر اللي تبغى تسوي له فولو
router.put("/:userId",verifyToken,(req,res)=>{
    follwerController.updateFollwers(req).then(data => res.status(200).json(data))
});
//هنا تستخدم هذا الراوت عشان تلغي المتابعه 
router.put("/unfollw/:userId",verifyToken,(req,res)=>{
    follwerController.unFollwers(req).then(data => res.status(200).json(data))
});
    //هذا يعرض المتابعين حق المستخدم اللي مسجلين دخول
router.get("/",verifyToken,(req,res)=>{
    follwerController.getFollwers(req).then(data => res.status(200).json(data))
});
//هنا تمرر اي دي اليوزر اللي تبغى تشوف متابعينه
router.get("/:userId",verifyToken,(req,res)=>{
    follwerController.getFollwersId(req.params.userId).then(data => res.status(200).json(data))
});
module.exports = router;