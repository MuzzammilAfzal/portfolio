"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'


const About = () => {
    const router = useRouter()
  return (
     <div className="flex flex-wrap w-screen h-fit justify-center ">
          <div className='w-[50%] md:w-[20%]  '>
              <img src="/images/profile.jpg" alt="" className='rounded-full w-full border-2 border-white ' />
          </div>
          <div className='p-2 md:p-20'>
            <span className="text-white text-4xl block text-center "
            >Muzzammil Afzal</span>
            <span className="text-white my-2 "
            >Full Stack Engineer</span>
           <div className='flex gap-2'>
                <button className='text-black p-2 bg-white rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            onClick={()=>{router.push("/files/resume")}}
            >Resume ➚</button>

            <button className='text-black p-2 bg-white  rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            ><Link href={"https://www.linkedin.com/in/muzzammil-afzal-045155322/"}  target="_blank">LinkedIn ➚</Link></button>

            <button className='text-black p-2 bg-white rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            ><Link href={"https://github.com/MuzzammilAfzal"}  target="_blank">Github ➚</Link></button>
           </div>
          </div>
    </div>
  )
}

export default About