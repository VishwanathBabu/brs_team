const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONODB_URL)
        console.log("MongoDB connected successfully")
    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports=connectDB