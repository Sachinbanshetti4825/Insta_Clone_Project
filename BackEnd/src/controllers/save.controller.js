const postModel = require("../models/post.model");
let saveModel=require("../models/save.model");
const userModel = require("../models/user.model");

async function savePostController(req,res){

    let userId=req.user.id;

    let isUserExists=await userModel.findById(userId);

    if(!isUserExists){
        return res.status(400).json({
            Message:"User Not Found"
        })
    }

    let postId=req.params.id;

    let isPostExists=await postModel.findById(postId)

    if(!isPostExists){
        return res.status(400).json({
            Message:"Post Not Found"
        })
    }

    let isAlreadySaved=await saveModel.findOne({
        Post:postId,
        User:userId
    })

    if(isAlreadySaved){
        return res.status(409).json({
            Message:"You already saved this post"
        })
    }

    let savedPost=await saveModel.create({
        Post:postId,
        User:userId
    })

    return res.status(201).json({
        Message:"Post Saved successfully",
        savedPost
    })

}

async function unSavePostController(req,res){

    let userId=req.user.id;

    let isUserExists=await userModel.findById(userId);

    if(!isUserExists){
        return res.status(400).json({
            Message:"User Not Found"
        })
    }

    let postId=req.params.id;

    let isPostExists=await postModel.findById(postId)

    if(!isPostExists){
        return res.status(400).json({
            Message:"Post Not Found"
        })
    }

    let isSaved=await saveModel.findOne({
        Post:postId,
        User:userId
    })

    if(!isSaved){
        return res.status(200).json({
            Message:"Post is not saved"
        })
    }

    await saveModel.findOneAndDelete({
        Post:postId,
        User:userId
    })


    return res.status(200).json({
        Message:"Post unSaved successfully",
    })

}

module.exports={
    savePostController,unSavePostController
}