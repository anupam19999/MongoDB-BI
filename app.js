const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
require("dotenv/config")
mongoose.set("strictQuery", false);

const app=express()
app.use(bodyparser.json())

//importsroutes

const postRoute=require("./routes/posts")
app.use("/posts",postRoute)

//routes 
app.get('/',(req,res)=>{
    res.send("home")
})

//connect to DB

mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connect mongo db")
})

//we start listening to the server

app.listen(3000)