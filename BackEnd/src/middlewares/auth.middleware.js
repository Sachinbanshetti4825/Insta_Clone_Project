let jwt=require("jsonwebtoken");

async function findUser(req,res,next){

    let token=req.cookies.token;


    if(!token){
        return res.status(401).json({
            Message:"Token not found"
        })
    }

    let decoded=null;

    try{
        decoded=await jwt.verify(token,process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(401).json({
            Message:"Invalid token"
        })
    }


    req.user=decoded;

    next();

}

module.exports=findUser;