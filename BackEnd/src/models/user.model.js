let mongoose=require("mongoose");

let userSchema=new mongoose.Schema({
    UserName:{
        type:String,
        unique:[true,"UserName must be unique"]
    },
    Email:{
        type:String,
        unique:[true,"Email must be unique"]
    },
    PassWord:{
        type:"String"
    },
    Bio:{
        type:"String"
    },
    profile_image:{
        type:"String",
        default:"https://ik.imagekit.io/jrlz9arosj/test_NGf9ptvcp?updatedAt=1773206309307"
    }
})

let userModel=mongoose.model("user",userSchema);

module.exports=userModel;