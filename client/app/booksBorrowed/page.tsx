'use client'
import React ,{useEffect,useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import toast, { Toaster } from 'react-hot-toast';
import Design from '@/Components/Design';


const backend = process.env.BACKEND;


export default function BooksBorrowed() {
    const [book,setBook]:any = useState();

    async function getAllLoans() {
        const res = await fetch(`${backend}/loan/getAllLoans`);
        const data = await res.json();
        setBook(data.loans); 
    }

    useEffect(()=>{
        getAllLoans();
    },[])

    function formatDate(inputDate: string): string {
    // Create a new Date object from the input string
    const date: Date = new Date(inputDate);

    // Extract day, month, and year from the Date object
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1; // January is 0, so we add 1
    const year: number = date.getFullYear();

    // Add leading zeros if needed
    const formattedDay: string = day < 10 ? '0' + day : day.toString();
    const formattedMonth: string = month < 10 ? '0' + month : month.toString();

    // Return the formatted date string
    return formattedDay + '-' + formattedMonth + '-' + year;
}


  return (
    <section className='h-screen w-screen p-6 bg-neutral-900 overflow-x-hidden flex space-y-10 flex-col items-center overflow-y-scroll'>
      <h1 className='text-6xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] text-transparent bg-clip-text '>Books Borrowed</h1>
      <table className="table-auto w-[60vw] z-50 border-collapse">
        <thead>
          <tr className="bg-gray-100 bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] text-black ">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Student Name</th>
            <th className="px-4 py-2 border">Book Title</th>
            <th className="px-4 py-2 border">Issue Date</th>
            <th className="px-4 py-2 border">Return Date</th>
          </tr>
        </thead>
        <tbody>
          {
          book
          ?
          book.map((book:any) => (
            <tr key={book._id} className={book._id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-4 py-2 border">{book.ID}</td>
              <td className="px-4 py-2 border">{book.Student_Name}</td>
              <td className="px-4 py-2 border">{book.Book_Title}</td>
              <td className="px-4 py-2 border">{formatDate(book.Issue_Date)}</td>
              <td className="px-4 py-2 border">{formatDate(book.Return_Date)}</td>
            </tr>
          ))
          :
           <tr className='bg-gray-100' >
              <td className="px-4 py-2 border">No</td>
              <td className="px-4 py-2 border">Data</td>
              <td className="px-4 py-2 border">Available</td>
              <td className="px-4 py-2 border">yet</td>
            </tr>  
        }
        </tbody>
      </table>
        <Toaster />
      </section>
  )
}
