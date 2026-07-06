require("dotenv").config();
const cmtModel = require("../models/comment.model");
const followModel = require("../models/follow.model");
const likeModel = require("../models/like.model");
let postModel=require("../models/post.model");
let Imagekit=require("imagekit");
const saveModel = require("../models/save.model");

let imagekit=new Imagekit({
    publicKey:process.env.Imagekit_Public_Key,
    privateKey:process.env.Imagekit_Private_Key,
    urlEndpoint:process.env.Imagekit_Url_Endpoint
})

async function createPostController(req,res){

    if(!req.file){
        return res.status(400).json({
            Message:"Image not found"
        })
    }


    let uploadFile=await imagekit.upload({
        file:req.file.buffer,
        fileName:req.file.originalname
    })

    let post=await postModel.create({
        Caption:req.body.Caption,
        Image_Url:uploadFile.url,
        User:req.user.id
    })

    res.status(201).json({
        Message:'Post created successfully',
        post
    })



}

async function getPostController(req,res){

    try{
        let userId=req.user.id;
        let Posts=await postModel.find({
            User:userId
        });

        return res.status(200).json({
            Message:"Here are posts",
            Posts
        })
    }
    catch(err){
        res.status(500).json({
            Message:"Something went wrong"
        })
    }
    

}

async function getSpecificPostController(req,res){

    let PostId=req.params.id;

    let post = await postModel.findById(PostId);

    if(!post){
        return res.status(400).json({
            Message:"Post not found"
        })
    }


    let userId=req.user.id;

    let check=post.User.toString()===userId

    if(!check){
        res.status(401).json({
            Message:"Unauthorized access"
        })
    }

    return res.status(200).json({
        Message:"Here is post",
        post
    })

}

async function getFeedController(req,res){

    let posts=await postModel.find().populate("User","-PassWord");

    const result = await Promise.all(
        posts.map( async post=>{

        let isLiked=await likeModel.findOne({
            User:req.user.id,
            Post:post._id
        })

        let likeCount=await likeModel.countDocuments({
            Post:post._id
        })

        let isFollowed=await followModel.findOne({
            Follower:req.user.id,
            Following:post.User._id      
        })

        let isSaved=await saveModel.findOne({
            Post:post._id,
            User:req.user.id
        })

        return {
            ...post.toObject(),
            isLiked:!!isLiked,
            likeCount,
            isFollowed:!!isFollowed,
            isSaved:!!isSaved
        }

    })
    )

    return res.status(200).json({
        Message:"Post fetched successfully",
        posts:result
    })

}

module.exports={createPostController,getPostController,getSpecificPostController,getFeedController}