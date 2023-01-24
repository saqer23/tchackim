const multer =require('multer')

const storge = multer.diskStorage({
    destination:function(req,file,cd){
        cd(null, './product_img/');
        // cd(null, 'C:/nodejs/jilbab/famous_img/');
    },
    filename:function(req,file,cd){
        cd(null, '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname);
    }
});

const fileFilter = (req,file,cd) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cd(null,true);
    }else{
        cd(null,false);
    }
}
const upload = multer({storage:storge,fileFilter:fileFilter}).array('productImg',8);

module.exports = {
    upload
}