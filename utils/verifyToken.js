const jwt = require("jsonwebtoken")
const { createError } = require("./error.js")


const verifyToken = (req,res,next) =>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return next(createError(401,"you must login"));

    jwt.verify(token,process.env.JWT,(err,user) =>{
        if(err) return next(createError(403,"you must login"));

        req.user = user;
        next()
    })
}


const verifyUsrt = (req,res,next) =>{
    verifyToken(req,res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
        throw Error("not authrized 401")
        }
    });
};

module.exports = {
    verifyToken,
    verifyUsrt
}