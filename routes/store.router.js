const storeController = require('../controller/store.controller.js')
const express = require("express")
const { verifyToken , verifyUsrt} = require('../utils/verifyToken.js')
const multer =require('multer')

const storge = multer.diskStorage({
    destination:function(req,file,cd){
        cd(null, './product_img/');
        // cd(null, 'C:/nodejs/jilbab/famous_img/');
    },
    filename:function(req,file,cd){
        cd(null, file.originalname);
    }
});

const fileFilter = (req,file,cd) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cd(null,true);
    }else{
        cd(null,false);
    }
}
const upload = multer({storage:storge,fileFilter:fileFilter}).any(['logo','avatar']);


const router = express.Router();




router.post("/create",verifyToken,upload,(req,res)=>{
    storeController.createStore(req).then(data => res.status(200).json(data))
});
router.get("/",verifyToken,(req,res)=>{
    storeController.getStores().then(data => res.status(200).json(data))
});
router.get("/search",verifyToken,(req,res)=>{
    storeController.getByQuery(req.query).then(data => res.status(200).json(data))
});
;
router.get("/:storeId",verifyToken,(req,res)=>{
    storeController.getStore(req.params.storeId).then(data => res.status(200).json(data))
});;
router.put("/:storeId",verifyToken,(req,res)=>{
    storeController.updateStore(req).then(data => res.status(200).json(data))
});;
router.delete("/:storeId",verifyToken,(req,res)=>{
    storeController.deleteStore(req.params.storeId).then(data => res.status(200).json(data))
});



module.exports = router;