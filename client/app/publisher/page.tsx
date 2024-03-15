'use client'
import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'
import toast, { Toaster } from 'react-hot-toast';
import { BackgroundGradient } from "@/Components/ui/background-gradient";

const backend = process.env.BACKEND;

const schema= z.object({
    name: z.string()
})

type FormField = z.infer<typeof schema>;

export default function Publisher() {

    const { register , handleSubmit , formState:{isSubmitting} } = useForm<FormField>({
        resolver:zodResolver(schema)
    });

    const onSubmit:SubmitHandler<FormField> = async(data)=>{
        try{
            const res = await fetch(`${backend}/pub/addPublisher`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            const datamsg = await res.json();
            if(datamsg){
                toast.success(datamsg.message);
            }
        }catch(err){
            toast.error("Publisher not added");
        }
    }

  return (
    <section className='h-screen w-screen p-6 bg-neutral-900 overflow-x-hidden flex space-y-10 flex-col items-center overflow-y-scroll '>
        <h1 className='text-5xl md:text-6xl text-white'>Add Publisher</h1>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-10  bg-zinc-900">
            <form
            onSubmit={handleSubmit(onSubmit)} 
            className=' w-full rounded-lg flex flex-col items-center h-full '>
                <label className='text-white text-2xl ' htmlFor="name">Enter Publisher Name</label>
                <input {...register('name')} type="text" name='name' className='w-full bg-gray-50 border border-black px-2 rounded-lg mt-4 py-2' />
                <button disabled={isSubmitting} type='submit' className='mt-4 w-full bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] text-white py-2 rounded-lg'>
                    {isSubmitting ? "Loading...":"Add Publisher"} 
                </button>
            </form> 
        </BackgroundGradient>
        <Toaster />
    </section>
  )
}
