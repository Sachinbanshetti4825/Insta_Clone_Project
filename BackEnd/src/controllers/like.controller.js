let likeModel=require("../models/like.model");
const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

async function likeController(req,res){

    let UserId=req.user.id;

    let postId=req.params.id;

    let isUserExists=await userModel.findById(UserId);

    if(!isUserExists){
        return res.status(401).json({
            Message:"User not found"
        })
    }

    let isPostExists=await postModel.findById(postId);

    if(!isPostExists){
        return res.status(404).json({
            Message:"Post not found"
        })
    }

    let isalreadyLiked=await likeModel.findOne({
        User:UserId,
        Post:postId
    })

    if(isalreadyLiked){
        return res.status(409).json({
            Message:"You are already likes this post"
        })
    }

    let likeRecord=await likeModel.create({
        User:UserId,
        Post:postId
    })

    return res.status(201).json({
        Message:"You likes this post successfully",
        likeRecord
    })

}

async function unlikeController(req,res){

    try{
        let userId=req.user.id;

        let postId=req.params.id;

        let isUserExists=await userModel.findById(userId);

        if(!isUserExists){
            return res.status(401).json({
                Message:"User not found"
            })
        }

        let isPostExists=await postModel.findById(postId);

        console.log(isPostExists);

        if(!isPostExists){
            return res.status(404).json({
                Message:"Post not found"
            })
        }

        let islikes=await likeModel.findOne({
            User:userId,
            Post:postId
        })

        if(!islikes){
            return res.status(400).json({
                Message:"You are not likes this post"
            })
        }

        await likeModel.findOneAndDelete({
            User:userId,
            Post:postId
        });

        return res.status(200).json({
            Message:"You unliked this post successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            Message:"Internal server error"
        })
    }


}

module.exports={likeController,unlikeController}