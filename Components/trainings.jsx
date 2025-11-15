"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Trainings = () => {
    const router=useRouter()
   return (
    <div className='  w-full  mt-20 opacity-90 '>
        <div className='flex justify-center mb-4'>
           <span className='text-2xl text-white '><u>Trainings & Certifications</u></span>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          <div className='w-[90%] md:w-[40%] h-fit border border-white rounded-2xl p-4 text-black bg-white hover:scale-110 transition-transform'>
           <div>
             <span className='text-2xl font-bold'>Complete web development course</span>
           </div>
           <div>
             <span className=''>🧑‍🏫 From: Udemy</span>
           </div>
           <div>
             <span className=''>🗓️ June 2025</span>
           </div>

           <div className='py-2'>
            <span className='font-bold'>Skills:-</span>
               <div className='px-4 flex gap-6'>
                   <li>React.js</li>
                   <li>Express</li>
                   <li>Node.js</li>
                   <li>MongoDB</li>
               </div>
           </div>
           
           <button className='text-blue-400 bg-black p-2 rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            onClick={()=>{router.push("/files/udemy")}}
            >Certificate Of Completion ➚</button>
        </div>


       <div className='w-[90%] md:w-[40%] h-fit border border-white rounded-2xl p-4 text-black bg-white hover:scale-110 transition-transform'>
           <div>
             <span className='text-2xl font-bold'>Generative AI: The Evolution of Thoughtful Online Search Generative AI: The Evolution of Thoughtful Online Searc</span>
           </div>
           <div>
             <span className=''>🧑‍🏫 From: LinkedIn Learning</span>
           </div>
           <div>
             <span className=''>🗓️ November 2025</span>
           </div>
           
           <button className='text-blue-400 bg-black p-2 rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            onClick={()=>{router.push("/files/aiCourse")}}
            >Certificate Of Completion ➚</button>
        </div>


        
        
        </div>
    </div>
  )
}

export default Trainings