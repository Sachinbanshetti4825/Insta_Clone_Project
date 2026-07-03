let mongoose=require("mongoose");

let likeSchema=new mongoose.Schema({

    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    Post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }

},
    {
        timestamps:true
    }
)

let likeModel=mongoose.model("likes",likeSchema);

module.exports=likeModel;