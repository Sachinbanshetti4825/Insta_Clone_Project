let express=require("express");
let findUser=require("../middlewares/auth.middleware");
let saveController=require("../controllers/save.controller");

let saveRouter=express.Router();


saveRouter.post("/Save/:id",findUser,saveController.savePostController);
saveRouter.delete("/unSave/:id",findUser,saveController.unSavePostController);

module.exports=saveRouter;