import {Diphylleia} from 'next/font/google'

const Dip = Diphylleia({
  subsets:['latin'],
  weight:'400'
})

export default function Home() {
  return (
    <section className=' h-screen w-screen bg-yellow-500 grid place-content-center relative'>
      <div className={`h-72 w-[640px] border-4 border-white rounded-lg flex flex-col gap-8 justify-center items-center `}>
        <p className={`${Dip.className} text-5xl`}>Library Management System</p>
        <button className=' bg-pink-600 w-32 h-12 rounded-lg text-white font-serif'>
          Get Started
        </button>
      </div>
      <div className="w-[2px] h-[500px] bg-pink-600 absolute top-0 right-0 rotate-45 origin-top"></div>
      <div className="w-[2px] h-[500px] bg-pink-600 absolute bottom-[41vh]  right-[88.3vw] rotate-[135deg] "></div>
      <div className="w-[2px] h-[500px] bg-pink-600 absolute top-[50vh] rotate-45 left-[351px] origin-top">

      </div>
    </section>
  )
}
