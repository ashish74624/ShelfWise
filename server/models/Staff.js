import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
    Staff_Name:{
        type:String,
        required:true
    },
    Staff_Email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Staff = mongoose.model('Staff',StaffSchema);

export default Staff ;