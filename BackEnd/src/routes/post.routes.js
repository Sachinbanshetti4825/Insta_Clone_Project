let express=require("express");

let postRouter=express.Router();
let postModel=require("../models/post.model");
let postController=require("../controllers/post.controller")

let multer=require("multer");
let findUser=require("../middlewares/auth.middleware");

let upload=multer({storage:multer.memoryStorage()});

postRouter.post("/createPost",upload.single("image"),findUser,postController.createPostController);

postRouter.get("/getPost",findUser,postController.getPostController);

postRouter.get("/getSpecificPost/:id",findUser,postController.getSpecificPostController);

postRouter.get("/feed",findUser,postController.getFeedController);

module.exports=postRouter;