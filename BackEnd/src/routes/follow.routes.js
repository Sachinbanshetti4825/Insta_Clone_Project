let express=require("express");
let findUser=require("../middlewares/auth.middleware");

let followRouter=express.Router();
let followController=require("../controllers/follow.controller");

followRouter.post("/follow/:id",findUser,followController.followController);
followRouter.delete("/unfollow/:id",findUser,followController.unfollowController);

module.exports=followRouter;