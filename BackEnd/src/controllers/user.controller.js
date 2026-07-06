
let userModel=require("../models/user.model");
let bcrypt=require("bcrypt");
let jwt=require("jsonwebtoken");

async function registerController (req,res){

    let {UserName,Email,PassWord,Bio,profile_image}=req.body;

    let isUserAlreadyExists=await userModel.findOne({
        $or:[
            {
                UserName:UserName
            },
            {
                Email:Email
            }
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            Message:"User already existed"
        })
    }

    let hash=await bcrypt.hash(PassWord,10);

    let user=await userModel.create({
        UserName,Email,PassWord:hash,Bio,profile_image
    })

    const token=await jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET
    )

    res.cookie("token",token);

    res.status(201).json({
        Message:"User created successfully",
        user:{
            _id:user._id,
            UserName:user.UserName,
            Email:user.Email,
            Bio:user.Bio,
            profile_image:user.profile_image
        }
    })

}

async function loginController(req,res){

    let {LoginId,PassWord}=req.body;

    console.log(req.body);

    let user=await userModel.findOne({
        $or:[
            {
                UserName:LoginId
            },
            {
                Email:LoginId
            }
        ]
    })

    console.log(user);

    if(!user){
        return res.status(400).json({
            Message:"User does not exists"
        })
    }

    let correctedPassword=await bcrypt.compare(PassWord,user.PassWord);

    

    if(!correctedPassword){
        return res.status(401).json({
            Message:"Invalid user unauthorized access"
        })
    }

    console.log("Entered Password:", PassWord);
    console.log("Password Match:", correctedPassword);

    const token=jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET
    )

    res.cookie("token",token);

    res.status(200).json({
        Message:"User logined successfully",
        user:{
            _id:user._id,
            UserName:user.UserName,
            Email:user.Email,
            Bio:user.Bio,
            profile_image:user.profile_image
        }
    })

}

module.exports={registerController,loginController};