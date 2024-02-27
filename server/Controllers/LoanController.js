import Loan from "../models/Loans.js";
import Student from '../models/Student.js'
import Book from "../models/Book.js";

export const addLoan = async(req,res)=>{
    const {Student_ID,Book_Title,Issue_Date,Return_Date} = req.body;
    try {
        const s_id = await Student.findOne({Student_ID:Student_ID});
        const book_id = await Book.findOne({Book_Title:Book_Title});
        const loan = await Loan.create({
            Student_Id:s_id._id,
            ID:s_id.Student_ID,
            Student_Name:s_id.Student_Name,
            Book_Id:book_id._id,
            Book_Title:book_id.Book_Title,
            Issue_Date:Issue_Date,
            Return_Date:Return_Date
        });
        await loan.save()
        return res.status(200).json({message:"Book Alocated",loan:loan})
    } catch (error) {
        return res.status(403).json({message:"Book not Alocated"});
    }
}

export const getAllLoans = async(req,res)=>{
    try {
        const loans = await Loan.find({});

        return res.status(200).json({message:"Loans Retrived",loans:loans})
    } catch (error) {
        return res.json({message:"Can't get Loan data"});
    }
}


export const getStudentLoans = async (req, res) => {
    try {
        const loans = await Loan.find({});
        const studentsMap = {}; // Using an object as a HashMap

        loans.forEach(loan => {
            const { ID, Student_Name, Book_Title, Return_Date } = loan;
            if (studentsMap[ID]) {
                studentsMap[ID].books.push({Book_Title:Book_Title,Return_Date:Return_Date});
            } else {
                studentsMap[ID] = { Student_Id: ID, Student_Name, books: [{Book_Title:Book_Title,Return_Date:Return_Date}] };
            }
        });

        // Convert the HashMap object to an array of students
        const students = Object.values(studentsMap);

        return res.status(200).json({ done: true, students });
    } catch (error) {
        return res.json({ done: false });
    }
};


export default { addLoan, getAllLoans, getStudentLoans }