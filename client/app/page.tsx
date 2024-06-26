"use client"
import { Lora } from 'next/font/google'
import { Barlow } from 'next/font/google'
import Link from 'next/link'
import { WavyBackground } from "@/Components/ui/wavy-background";

const Com = Lora({
    subsets:['cyrillic'],
    weight:'400'
})

const bar = Barlow({
  subsets:['latin'],
  weight:'500'
})

export default function Home() {
  return (
     <WavyBackground className="max-w-4xl mx-auto pb-40">
      <h1 className="text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        ShelfWise
      </h1>
      <p className='inter-var text-center text-sm md:text-base text-gray-100'>A Library Management System</p>
      <Link className='mx-auto flex justify-center' href={'/menu'}>
        <button className="text-base md:text-lg mt-4 text-black bg-white px-4 py-2 rounded-full font-normal inter-var text-center">
          Get Started
        </button>
      </Link>
    </WavyBackground>
  )
}
