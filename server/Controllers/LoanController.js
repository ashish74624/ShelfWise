import Loan from "../models/Loans.js";
import Student from '../models/Student.js'
import Book from "../models/Book.js";

export const addLoan = async(req,res)=>{
    const {Student_ID,Book_Title,Issue_Date,Return_Date} = req.body;
    try {
        const s_id = await Student.find({Student_ID:Student_ID});
        const book_id = await Book.find({Book_Title:Book_Title});
        const loan = await Loan.create({
            Student_Id:s_id._id,
            Book_Id:book_id._id,
            Issue_Date:Issue_Date,
            Return_Date:Return_Date
        });
        return res.status(200).json({message:"Book Alocated",loan:loan})
    } catch (error) {
        return res.status(403).json({message:"Book not Alocated"});
    }
}

export default {addLoan}