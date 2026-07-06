let mongoose=require("mongoose");

let saveSchema=new mongoose.Schema({

    Post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})

let saveModel=mongoose.model("save",saveSchema);

module.exports=saveModel;