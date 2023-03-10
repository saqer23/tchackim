const express = require('express')
const notificationController = require('../controller/Notification.controller')
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router()

router.get("/",verifyToken,(req,res)=>{
    notificationController.getUserNotifications(req,res).then(data => res.status(200).json(data))
});

router.post("/",(req,res)=>{
    notificationController.send(req,res).then(data => res.status(200).json(data))
});


module.exports = router;
