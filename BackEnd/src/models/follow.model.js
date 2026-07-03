let mongoose=require("mongoose");

let followSchema=new mongoose.Schema({

    Follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    Following:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

},{
    timestamps:true
})

followSchema.index(
    { Follower: 1, Following: 1 },
    { unique: true }
);

let followModel=mongoose.model("follow",followSchema);

module.exports=followModel;