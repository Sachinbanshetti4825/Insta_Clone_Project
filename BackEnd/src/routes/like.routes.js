let express=require("express");
let findUser=require("../middlewares/auth.middleware");

let likeRouter=express.Router();
let likeController=require("../controllers/like.controller");

likeRouter.post("/like/:id",findUser,likeController.likeController);
likeRouter.delete("/unlike/:id",findUser,likeController.unlikeController);

module.exports=likeRouter;