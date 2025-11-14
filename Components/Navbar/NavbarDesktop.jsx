"use client"
import Link from 'next/link'
import React from 'react'

const NavbarDesktop = () => {
 if(window.innerWidth>=768)
    return(
     <nav className='sticky top-0  w-screen p-10 opacity-100  flex justify-around '>
       <div>
           <Link href={"/"}>
               <span className='text-white  transition-all hover:text-2xl '>Portfolio</span>
           </Link>
       </div>
       <div className='text-white '>
            <Link href={"#about"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl' >About</Link>
            <Link href={"#workExperience"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Work Experience</Link>
            <Link href={"#projects"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Projects</Link>
            <Link href={"/skills"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Skills</Link>
            <Link href={"/achievements"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Trainings/Certifications</Link>
            <Link href={"/contact"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Contact</Link>
       </div>
     </nav>
    )
}

export default NavbarDesktop