let followModel=require("../models/follow.model");
const userModel = require("../models/user.model");



async function followController(req,res){

    let followerId=req.user.id;
    let followeeId=req.params.id;


    //Check follower exits or not 
    let isFollowerExists=await userModel.findById(followerId);

    if(!isFollowerExists){
        return res.status(401).json({
            Message:"Please login unauthorized access"
        })
    }


    //Check followee exists or not
    let isfolloweeExists=await userModel.findById(followeeId);

    if(!isfolloweeExists){
        return res.status(404).json({
            Message:"Followee does not exist"
        })
    }


    //Check if follower following ourself
    if(followerId===followeeId){
        return res.status(400).json({
            Message:"You cannot follow yourself"
        })
    }

    let isalreadyFollowed=await followModel.findOne({
        Follower:followerId,
        Following:followeeId
    })

    if(isalreadyFollowed){
        return res.status(409).json({
            Message:"Already followed"
        })
    }

    
    let followRecord=await followModel.create({
        Follower:followerId,
        Following:followeeId
    })

    return res.status(200).json({
        Message:"You followed successfully",
        followRecord
    })

}


async function unfollowController(req,res){

    let followerId=req.user.id;

    let followeeId=req.params.id;

    let isFollowerExists=await userModel.findById(followerId);

    if(!isFollowerExists){
        return res.status(401).json({
            Message:"Follower does not exists"
        })
    }

    let isFolloweeExists=await userModel.findById(followeeId);

    if(!isFolloweeExists){
        return res.status(404).json({
            Message:"Followee does not exists"
        })
    }

    if(followerId===followeeId){
        return res.status(404).json({
            Message:"You cannot unfollow urself"
        })
    }

    let isFollowing=await followModel.findOne({
        Follower:followerId,
        Following:followeeId
    })

    if(!isFollowing){
        return res.status(404).json({
            Message:"You are not following this user"
        })
    }

    await followModel.findOneAndDelete({
        Follower:followerId,
        Following:followeeId
    })

    return res.status(200).json({
        Message:"You are unfollowed this user successfully"
    })

}

module.exports={followController,unfollowController};