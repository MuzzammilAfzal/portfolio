"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react";


const NavBar = () => {
  const [open, setOpen] = useState(false);
   
      return(
       <nav className='sticky top-0 z-50  w-screen p-8 opacity-100  flex justify-between md:justify-around '>
         <div>
             <Link href={"/"}>
                 <span className='text-white  transition-all hover:text-2xl text-4 '>Portfolio</span>
             </Link>
         </div>
         <button
            onClick={() =>{ 
              setOpen(!open)}}
            className=" text-white  transition-all duration-300  md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
         <div className='text-white md:block hidden'>
              <Link href={"/#about"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl' >About</Link>
              <Link href={"/#workExperience"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Work Experience</Link>
              <Link href={"/#trainings"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Trainings/Certifications</Link>
              <Link href={"/#projects"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Projects</Link>
              <Link href={"/#skills"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Skills</Link>
              <Link href={"/#contact"} className='m-4 p-2 hover:bg-white hover:text-black hover:opacity-100 rounded-2xl'>Contact</Link>
         </div>
  
  
         {open && (
          <div className=" flex flex-col rounded-2xl p-2   fixed top-18 right-5 items-center opacity-100 bg-white shadow-md space-y-3 py-4 transition-all duration-300">
            <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/#workExperience" onClick={() => setOpen(false)}>Work Experience</Link>
            <Link href="/#trainings" onClick={() => setOpen(false)}>Trainings/Certifications</Link>
            <Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/#skills" onClick={() => setOpen(false)}>Skills</Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
       </nav>
      )
}

export default NavBar