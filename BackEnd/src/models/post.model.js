let mongoose=require("mongoose");

let postSchema=new mongoose.Schema({

    Caption:{
        type:"String",
    },
    Image_Url:{
        type:"String",
        required:[true,"imageurl is required for uploading post"]
    },
    User:{
        ref:"user",
        type:mongoose.Schema.Types.ObjectId
    }
})

let postModel=mongoose.model("post",postSchema);

module.exports=postModel;