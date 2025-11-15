import React from 'react'

const Contact = () => {
  return (
    <div className='w-full  mt-20 mb-10 opacity-90 p-4 '>
        <div className='flex justify-center mb-4'>
           <span className='text-2xl text-white '><u>Contact</u></span>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
    
                <a href="tel:+919972228752">
                  <div className='px-10 py-4 bg-gray-500 hover:scale-110 transition-all border-2 border-white rounded-2xl'>
                    <span className='text-4xl'>📞</span>
                    <span className='text-white text-lg'>+91 9972228752</span>
                  </div>
                </a>
            

            
                <a href="mailto:muzzu2605afzall@gmail.com"
                 target="_blank">
                     <div className='px-10 py-4 bg-gray-500 hover:scale-110 transition-all border-2 border-white rounded-2xl'>
                        <span className='text-4xl'>📩</span>
                        <span className='text-white text-lg'>muzzu2605afzall@gmail.com</span>
                    </div>
                </a>


                <a href="https://www.linkedin.com/in/muzzammil-afzal-045155322/"
                 target="_blank">
                     <div className='px-10 py-4 bg-gray-500 hover:scale-110 transition-all border-2 border-white rounded-2xl'>
                        <span className='text-4xl'>[in]</span>
                        <span className='text-white text-lg'>LinkedIn</span>
                    </div>
                </a>
           
        </div>
    </div>
  )
}

export default Contact