let mongoose=require("mongoose");

let commentSchema=new mongoose.Schema({

    Post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    text:"String"
})

let cmtModel=mongoose.model("comment",commentSchema);

module.exports=cmtModel