const locationController = require('../controller/location.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')

const router = express.Router();




router.post("/create",verifyToken,(req,res)=>{
    locationController.createLocation(req.body).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    locationController.getLocation().then(data => res.status(200).json(data))
});
;
router.get("/:locationId",verifyToken,(req,res)=>{
    locationController.getLocations(req.params.locationId).then(data => res.status(200).json(data))
});
router.put("/:locationId",verifyToken,(req,res)=>{
    locationController.updateLocation(req).then(data => res.status(200).json(data))
});
router.delete("/:locationId",verifyToken,(req,res)=>{
    locationController.deleteLocation(req.params.locationId).then(data => res.status(200).json(data))
});



module.exports = router;