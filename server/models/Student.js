import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    Student_Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Student_Phone:{
        type:Number
    }
})

const Student = mongoose.model('Student',StudentSchema);

export default Student;