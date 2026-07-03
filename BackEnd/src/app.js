let express=require("express");

let authRouter=require("./routes/auth.routes");
let postRouter=require("./routes/post.routes");
let followRouter=require("./routes/follow.routes");
let likeRouter=require("./routes/like.routes");
let cors=require("cors")

let cookieparser=require("cookie-parser");

let app=express();


app.use(express.json());
app.use(cookieparser());
app.use(cors({
    origin:"http://localhost:5173 ",
    credentials:true
}));

app.use("/api/auth",authRouter);
app.use("/api/post",postRouter);
app.use("/api/follow",followRouter);
app.use("/api/like",likeRouter);

module.exports=app;