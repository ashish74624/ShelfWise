import React from 'react'
import { Barlow } from 'next/font/google'

const bar = Barlow({
  subsets:['latin'],
  weight:'500'
})

interface propType {
    data:string
}

export default function Button({data}:propType) {
  return (
    <button className={`${bar.className} bg-[#4d2d18] text-3xl w-72 py-2 rounded-lg`}>
       {data}
    </button>
  )
}
