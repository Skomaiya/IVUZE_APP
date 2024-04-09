import mongoose from "mongoose"
import { type } from "os"

const ivuzeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    role:{
        type:string,
        required:true
    },
    hospitalCategory:{
        type:string,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
ivuzeModel = mongoose.model("Users",ivuzeSchema)
export default ivuzeModel;