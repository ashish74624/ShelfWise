'use client'
import React ,{useEffect,useState} from 'react'
import Design from '@/Components/Design';


const backend = process.env.BACKEND;


export default function BookDetails() {
    const [book,setBook]:any = useState();

    async function getAllLoans() {
        const res = await fetch(`${backend}/book/getAllBooks`);
        const data = await res.json();
        setBook(data.books); 
    }

    useEffect(()=>{
        getAllLoans();
    },[])


  return (
    <section className='h-screen w-screen p-6 bg-neutral-900 overflow-x-hidden flex space-y-10 flex-col items-center overflow-y-scroll'>
        <h1 className='text-5xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] text-transparent bg-clip-text '>
            All Book Details
        </h1>
        <table className="table-auto w-full border-collapse ">
            <thead>
                <tr className=" bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]">
                    <th className="px-4 py-2 border">Book Title</th>
                    <th className="px-4 py-2 border">Author Name</th>
                    <th className="px-4 py-2 border">Publisher Name</th>
                    <th className="px-4 py-2 border">No. of Copies</th>
                    <th className="px-4 py-2 border">Edition</th>
                </tr>
            </thead>
            <tbody>
            {
            book 
            ?

            book.map((book:any) => (
            <tr key={book._id} className={book._id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-4 py-2 border">{book.Book_Title}</td>
              <td className="px-4 py-2 border">{book.Author_Name}</td>
              <td className="px-4 py-2 border">{book.Publisher_Name}</td>
              <td className="px-4 py-2 border">{book.No_Of_Copies}</td>
              <td className="px-4 py-2 border">{book.Edition}</td>
            </tr>
            ))
            :
            <tr className= 'bg-white'>
              <td className="px-4 py-2 border">No</td>
              <td className="px-4 py-2 border">Data</td>
              <td className="px-4 py-2 border">Available</td>
              <td className="px-4 py-2 border">Yet</td>
              <td className="px-4 py-2 border"></td>
            </tr>    
            }
        </tbody>
      </table>
      </section>
  )
}
