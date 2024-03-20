"use client"
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import toast, { Toaster } from 'react-hot-toast';
import { BackgroundGradient } from "@/Components/ui/background-gradient";


const schema = z.object({
    Student_ID:z.number(),
    Student_Name: z.string(),
    Department: z.string(),
    Semester: z.number(),
    Student_Phone: z.number()
});

const backend = process.env.BACKEND;


type FormField = z.infer<typeof schema>

export default function EnterStudent() {
    const {register,handleSubmit, formState:{isSubmitting}} = useForm<FormField>(
        {resolver:zodResolver(schema)}
    );

    const onSubmit:SubmitHandler<FormField> = async(data)=>{
        try {
            const res = await fetch(`${backend}/student/addStudent`,{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify(data)
            });
            const dataMsg = await res.json();
            if(res.ok){
                toast.success(dataMsg.message);
            }else{
                toast(dataMsg.message);
            }
        } catch (error) {
            toast.error("Student not Added");
        }
    }

  return (
    <section className='h-screen w-screen p-6 bg-neutral-900 overflow-x-hidden flex space-y-10 flex-col items-center overflow-y-scroll'>
        <h1 className='text-5xl md:text-6xl text-white'>Add Student</h1>
        <BackgroundGradient className="rounded-[22px] max-w-sm  bg-zinc-900">
            <form onSubmit={handleSubmit(onSubmit)}  className=' w-full rounded-lg flex flex-col p-4 h-full text-white '>
                <h1 className='w-max mx-auto mb-2 text-2xl ' >Enter Student Details</h1>
                <label className='mt-2' htmlFor="Student_ID" >Student Id</label>
                <input type="number" {...register('Student_ID',{ valueAsNumber: true })} className='bg-gray-100 rounded-md border py-1 px-2 '  />
                <label className='mt-2' htmlFor="Student_Name">Student Name</label>
                <input {...register('Student_Name')} className='bg-gray-100 rounded-md border py-1 px-2 ' type="text" />
                <label className='mt-2' htmlFor="Department">Department</label>
                <input {...register('Department')} className='bg-gray-100 rounded-md border py-1 px-2 ' type="text" />
                
                <label className='mt-2' htmlFor="Semester" >Semester</label>
                <input type="number" {...register('Semester',{ valueAsNumber: true })} className='bg-gray-100 rounded-md border py-1 px-2 '  />
                <label className='mt-2' htmlFor="Student_Phone" >Student Phone</label>
                <input type="number" {...register('Student_Phone',{ valueAsNumber: true })} className='bg-gray-100 rounded-md border py-1 px-2 '  />
                <button disabled={isSubmitting} type='submit' className='mt-4 w-full bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] text-white py-2 rounded-lg'>
                    {isSubmitting ? "Loading...":"Register Student"} 
                </button>
            </form>
        </BackgroundGradient>
        <Toaster />
      </section>
  )
}
