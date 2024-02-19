import Book from'../models/Book.js'

const addBook = async(req,res)=>{
    const {Author_Name,Title,Copies,Edition}= req.body;
    try{
        const book = await Book.create({
            Author_Name:Author_Name,
            Book_Title:Title,
            No_Of_Copies:Copies,
            Edition:Edition
        });
        await book.save();
        return res.status(200).json({message:'Book Added'})
    }catch{
        return res.status(404).json({message:'Book Added'})
    }
}

export default {addBook};