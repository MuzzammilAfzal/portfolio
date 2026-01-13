import React from 'react'

const Skills = () => {
    const skills=[
        "React.js","Express","MongoDB","PostgreSQL","Node.js","APIs","Javascript","Typescript","Next.js","Prisma ORM","Git","Postman","Docker"
    ]
  return (
    <div className='w-full  mt-20 opacity-90 p-4 '>
        <div className='flex justify-center mb-4'>
           <span className='text-2xl text-white '><u>Skills</u></span>
        </div>
        

       <div className='flex justify-center'>
         <div className='flex flex-wrap w-full md:w-[50%] gap-2 p-10 border-2 border-white rounded-2xl'>
            <span></span>
            {
                skills.map((e,index)=>{
                    return <div key={index} className='text-white font-bold px-4 py-2 border border-white rounded-2xl hover:bg-white hover:text-black '>
                           {e}
                     </div>
                })
            }
            
        </div>
       </div>

    </div>
  )
}

export default Skills