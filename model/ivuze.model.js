import mongoose from "mongoose"
import { type } from "os"

const ivuzeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    hospitalCategory:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
const ivuzeModel = mongoose.model("Users",ivuzeSchema)
export default ivuzeModel;