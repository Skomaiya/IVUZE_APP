import mongoose from "mongoose";
const vendorSchema =  mongoose.Schema({
    vendor_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    contact_number:{
        type:String,
        required:true,
    },
    hospital_name:{
        type:String,
        required:true,
    },
})
const vendors =  mongoose.model('vendors',vendorSchema)
export default vendors