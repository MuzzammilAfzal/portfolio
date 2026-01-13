"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const WorkExperience = () => {
    const router=useRouter()
  return (
    <div className='  w-full  mt-20 opacity-90 '>
        <div className='flex justify-center mb-4'>
           <span className='text-2xl text-white '><u>Work Experience</u></span>
        </div>

{/* next Work Expierence */}

    {/* <div className='flex justify-center mb-2 '>
          <div className='w-[90%] md:w-full h-fit border border-white rounded-2xl p-4 text-black bg-white hover:scale-110 transition-transform'>
           <div>
             <span className='text-2xl font-bold'>Junior Software Engineer Intern</span>
           </div>
           <div>
             <span className=''>🏢Jireh Software Solutions</span>
           </div>
           <div>
             <span className=''>🗓️ 10 January 2026 - Present</span>
           </div>
           <div>
             <span className=''>📍Location : Bangalore </span>
           </div>
           <div className='p-2'>
             <span className='w-full font-bold'>
             Key Responsibilities:-
             </span>
            <div className=' px-2'>
             <li>
              Tested and validated WhatsApp Cloud API workflows, <br />
              including webhook events and message delivery,
               using Meta’s developer sandbox environment.
             </li>
            </div>

            <button className='text-blue-400 bg-black p-2 rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            onClick={()=>{router.push("/files/AiRobosoftLOC")}}
            >Certificate Of Completion ➚</button>

            
           </div>
        </div>
        </div> */}



{/* next Work Experience */}


        <div className='flex justify-center mb-2 '>
          <div className='w-[90%] md:w-full h-fit border border-white rounded-2xl p-4 text-black bg-white hover:scale-110 transition-transform'>
           <div>
             <span className='text-2xl font-bold'>Full Stack Engineer Internship</span>
           </div>
           <div>
             <span className=''>🏢AiRobosoft products and services LLP</span>
           </div>
           <div>
             <span className=''>🗓️ 8 December 2025 - 8 January 2026</span>
           </div>
           <div>
             <span className=''>📍Location : Bangalore </span>
           </div>
           <div className='p-2'>
             <span className='w-full font-bold'>
             Key Responsibilities:-
             </span>
            <div className=' px-2'>
             <li>
              Tested and validated WhatsApp Cloud API workflows, <br />
              including webhook events and message delivery,
               using Meta’s developer sandbox environment.
             </li>
            </div>

            <button className='text-blue-400 bg-black p-2 rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            onClick={()=>{router.push("/files/AiRobosoftLOC")}}
            >Certificate Of Completion ➚</button>

            
           </div>
        </div>
        </div>





{/* next work Experience */}






        <div className='flex justify-center '>
          <div className='w-[90%] md:w-full h-fit border border-white rounded-2xl p-4 text-black bg-white hover:scale-110 transition-transform'>
           <div>
             <span className='text-2xl font-bold'>Full Stack Developer Internship</span>
           </div>
           <div>
             <span className=''>🏢The Entrepreneurship Network (Limitless Technologies LLP)</span>
           </div>
           <div>
             <span className=''>🗓️ Septumber 2025 - November 2025</span>
           </div>
           <div>
             <span className=''>📍Location : Remote</span>
           </div>
           <div className='p-2'>
             <span className='w-full font-bold'>
             Key Responsibilities:-
             </span>
            <div className=' px-2'>
             <li>
                 Developed responsive user interfaces using React.js, JavaScript, and Tailwind CSS.
             </li>
             <li>
                 Built and integrated REST APIs using Node.js, Express, and MongoDB.
             </li>
             <li>
                 Implemented CRUD operations and optimized database queries.
             </li>
             <li>
                 Collaborated using Git/GitHub for version control and code reviews.
             </li>
             <li>
                 Tested, debugged, and improved application performance.
             </li>
             <li>
                 Deployed projects on platforms like Vercel/Render and documented features clearly.
             </li>
            </div>

            <button className='text-blue-400 bg-black p-2 rounded-4xl my-2 hover:bg-black hover:text-white flex justify-center'
            onClick={()=>{router.push("/files/TenLOC")}}
            >Certificate Of Completion ➚</button>

            
           </div>
        </div>
        </div>


        
    </div>
  )
}

export default WorkExperience