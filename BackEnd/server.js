require("dotenv").config();
let app=require("./src/app");
let connectToDb=require("./src/config/database");

connectToDb();

app.listen(3000,()=>{
    console.log("express server is running at port 3000")
})