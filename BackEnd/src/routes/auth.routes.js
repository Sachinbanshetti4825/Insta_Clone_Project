let express=require("express");
let bcrypt=require("bcrypt");
let authRouter=express.Router();
let userController=require("../controllers/user.controller")

let jwt=require("jsonwebtoken");

let userModel=require("../models/user.model");

authRouter.post("/register",userController.registerController);

authRouter.post("/login",userController.loginController);

module.exports=authRouter;