let express=require("express");

let authRouter=require("./routes/auth.routes");
let postRouter=require("./routes/post.routes");
let followRouter=require("./routes/follow.routes");
let likeRouter=require("./routes/like.routes");
let saveRouter=require("./routes/save.routes");
let commentRouter=require("./routes/comment.routes");

let cors=require("cors")

let cookieparser=require("cookie-parser");

let app=express();


app.use(express.json());
app.use(cookieparser());
app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://insta-clone-project-frontend-5i1o.onrender.com"
    ],
    credentials:true
}));

app.use("/api/auth",authRouter);
app.use("/api/post",postRouter);
app.use("/api/follow",followRouter);
app.use("/api/like",likeRouter);
app.use("/api/save",saveRouter);
app.use("/api/cmt",commentRouter);

module.exports=app;