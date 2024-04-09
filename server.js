import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

const app = express()

const port =4000
const db = "mongodb+srv://Mariya:KKXp3IWxu7Sbp5zi@cluster0.fslpg5p.mongodb.net/IVUZE_App"
//Middleware
app.use(express.json())

mongoose.connect(db)
    try{
        console.log("DB connected successfully")
        app.listen(port,()=>{
            console.log(`server is running on port ${port} .... `)
        })

    }
    catch(err){
        console.log(err)
    }

