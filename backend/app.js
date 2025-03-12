const express=require("express")
const {connectDB}=require("./config/db")
const dotenv=require("dotenv")


dotenv.config()

const app=express()

const PORT=process.env.PORT

app.get("/", (req, res)=>{
    console.log("Home page accessed")
    res.send("Hello")
})

app.listen(PORT, ()=>{
    console.log("Server running at port 5000...")
})
