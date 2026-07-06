let express=require("express");
let commentRouter=express.Router();
const cmtModel = require("../models/comment.model");
const userModel = require("../models/user.model");
const postModel = require("../models/post.model");


async function getComment(req,res){

    let postId=req.params.id;

    let AllComments=await cmtModel.find(
        {
            Post:postId
        }
    ).populate("User","-PassWord");

    res.status(200).json({
        Message:"All comments fetched successfully",
        AllComments
    })

}


async function commentController(req,res){

    let userId=req.user.id;

    let isUserExists=await userModel.findById(userId);

    if(!isUserExists){
        return res.status(404).json({
            Message:"User not found"
        })
    }

    let postId=req.params.id;

    let isPostExists=await postModel.findById(postId);

    if(!isPostExists){
        return res.status(404).json({
            Message:"Post not found"
        })
    }

    let commentRecord=await cmtModel.create({
        Post:postId,
        User:userId,
        text:req.body.text
    })



    return res.status(201).json({
        Message:"you cmt this post successfully",
        Comment : commentRecord   
    })



}

async function delCommentController(req,res){

    let userId=req.user.id;

    let isUserExists=await userModel.findById(userId);

    if(!isUserExists){
        return res.status(404).json({
            Message:"User not found"
        })
    }

    let commentId=req.params.id;

    let isCommentExists=await cmtModel.findById(commentId);

    

    if(!isCommentExists){
        return res.status(404).json({
            Message:"Comment not found"
        })
    }

    

    let check=isCommentExists.User.toString()===req.user.id;

    if(!check){
        return res.status(401).json({
            Message:"You cannot delete comment"
        })
    }

    await cmtModel.findByIdAndDelete(isCommentExists._id)

    return res.status(200).json({
        Message:"you uncmt this post successfully", 
    })



}


module.exports={commentController,delCommentController,getComment}
