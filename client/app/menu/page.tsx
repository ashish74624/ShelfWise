import Button from '@/Components/Button'
import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
     <section className='h-screen w-screen p-6 bg-[#F5F2EE] overflow-hidden '>
      <div className='bg-[#F5F2EE] shadow-2xl h-full w-full border-[#4d2d18] rounded-lg border-4 overflow-hidden relative flex justify-center items-center'>
            <div className='bg-[#4d2d18] absolute  w-80 h-80 rounded-full bottom-[75vh] right-[85vw]  hover:w-96 hover:h-96 transition-all'></div>
            <div className='bg-[#4d2d18] absolute  w-80 h-80 rounded-full top-[75vh] left-[85vw]  hover:w-96 hover:h-96 transition-all'></div>
            <div className={` w-[2px] h-[500px] bg-[#4d2d18] absolute top-0 right-0 rotate-45 origin-top `}></div>
            <div className=" w-[2px] h-[500px] bg-[#4d2d18] absolute top-[50vh] rotate-45 left-[300px] origin-top"></div>
            <div className=' absolute  w-20 h-20 rounded-full blur-md animate-bounce bottom-1 right-4'></div>
            <div className='z-10 shadow-lg grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 justify-items-center gap-2 max-w-[99vw] w-[360px] md:w-[610px] bg-[#F5F2EE] h-max border-[#4d2d18] border-2 rounded-lg py-8 lg:py-4 relative mb-16 '>
                {/* <span className=' w-4 h-4 rounded-full bg-[#4d2d18] absolute bottom-[200px] left-[351px] md:left-[601px] animate-ping'></span> */}
                <Button data='Enter Book'/>
                <Link href={'/publisher'}>
                  <Button data='Enter Publisher'/>
                </Link>
                <Button data='Enter Student'/>
                <Button data='Books Borrowed'/>
                <Button data='Search Book'/>
                <Button data='Allocate Book'/>
                <Button data='Student Data'/>
                <Button data='Book Details'/>
            </div>  
        </div>
      </section>
  )
}
