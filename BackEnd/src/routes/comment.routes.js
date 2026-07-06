let express=require("express");

let cmtRouter=express.Router();
let findUser=require("../middlewares/auth.middleware");

let cmtController=require("../controllers/comment.controller");

cmtRouter.post("/comment/:id",findUser,cmtController.commentController)

cmtRouter.delete("/unComment/:id",findUser,cmtController.delCommentController);

cmtRouter.get("/getComment/:id",findUser,cmtController.getComment);

module.exports=cmtRouter;