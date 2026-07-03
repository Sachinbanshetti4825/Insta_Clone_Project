let mongoose=require("mongoose");


function ConnectToDb(){


    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Express server connected to mongodb")
    })


}

module.exports=ConnectToDb;