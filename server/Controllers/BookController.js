
import Book from'../models/Book.js'

export const addBook = async(req,res)=>{
    const {Author_Name,Title,Publisher_Name,Copies,Edition}= req.body;
    try{
        const book = await Book.create({
            Author_Name:Author_Name,
            Book_Title:Title,
            Publisher_Name:Publisher_Name,
            No_Of_Copies:Copies,
            Edition:Edition
        });
        await book.save();
        res.status(200).json({message:'Book Added'})
    }catch(err){
        res.status(404).json({message:'Book Not Added', error:err})
    }
}

export default {addBook};