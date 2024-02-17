import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
    Student_Id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    },
    Book_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    Issue_Date:{
        type:Date
    },
    Return_Date:{
        type:Date
    }
})

const Loan= mongoose.model('Loan',LoanSchema);

export default Loan;