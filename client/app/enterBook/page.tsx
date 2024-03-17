'use client'
import React ,{useEffect,useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import toast, { Toaster } from 'react-hot-toast';
import { BackgroundGradient } from "@/Components/ui/background-gradient";
import Design from '@/Components/Design';

const schema = z.object({
    Author_Name: z.string(),
    Title: z.string(),
    Publisher_Name: z.string(),
    Copies: z.number(),
    Edition: z.number()
});

const backend = process.env.BACKEND;


type FormField = z.infer<typeof schema>

export default function EnterBook() {
    const [publishers,setPublishers]:any = useState();
    const {register,handleSubmit, formState:{isSubmitting,errors}} = useForm<FormField>(
        {resolver:zodResolver(schema)}
    );

    async function getPublishers(){
        const res = await fetch(`${backend}/pub/getPublishers`);
        const data = await res.json();
        setPublishers(data.publisher);
    }

    useEffect(()=>{
        getPublishers();
    },[])

    const onSubmit:SubmitHandler<FormField> = async(data)=>{
        try {
            const res = await fetch(`${backend}/book/addBook`,{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify(data)
            });
            const dataMsg = await res.json();
            if(dataMsg){
                toast.success("Book Added");
            }
        } catch (error) {
            toast.error("Book not Added");
        }
    }

  return (
    <section className='h-screen w-screen p-6 bg-neutral-900 overflow-x-hidden flex space-y-10 flex-col items-center overflow-y-scroll '>
        <h1 className='text-5xl md:text-6xl text-white'>Add a Book</h1>
         <BackgroundGradient className="rounded-[22px] max-w-sm  bg-zinc-900">

            <form onSubmit={handleSubmit(onSubmit)} className=' w-full rounded-lg flex flex-col p-4 h-full text-white '>
                <h1 className='w-max mx-auto mb-2 text-2xl  ' >Enter Book Details</h1>
                <label className='mt-2' htmlFor="Title">Book Title</label>
                <input {...register('Title')} className='bg-gray-100 rounded-md border py-1 px-2 ' type="text" />
                <label className='mt-2' htmlFor="Author_Name">Author Name</label>
                <input {...register('Author_Name')} className='bg-gray-100 rounded-md border py-1 px-2 ' type="text" />
                <label className='mt-2' htmlFor="Publisher_Name">Enter Publisher</label>
                <select className='bg-gray-100 rounded-md border py-1 px-2 '  {...register('Publisher_Name')}>
                    <option value={"Select Options"}>
                        Select Options
                    </option>
                    {
                        publishers
                        ?
                        publishers.map((option:any)=>
                        <option key={option._id} value={option.Publisher_Name}>
                            {option.Publisher_Name}
                        </option>
                    )
                    :
                    <option value={"No Publisher Found"}>
                        No Publisher Found
                    </option>
                    }
                </select>
                <label className='mt-2' htmlFor="Copies" >No. Of Copies</label>
                <input type="number" {...register('Copies',{ valueAsNumber: true })} className='bg-gray-100 rounded-md border py-1 px-2 '  />
                <label className='mt-2' htmlFor="Edition">Edition</label>
                <input type="number" {...register('Edition',{valueAsNumber:true})} className='bg-gray-100 rounded-md border py-1 px-2 '  />
                <button disabled={isSubmitting} type='submit' className='mt-4 w-full bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] text-white py-2 rounded-lg'>
                    {isSubmitting ? "Loading...":"Enter Book"} 
                </button>
                </form>
            </BackgroundGradient>
        <Toaster />
      </section>
  )
}
