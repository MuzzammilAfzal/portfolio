"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from "lucide-react";

const NavbarMobile = () => {

    const [open, setOpen] = useState(false);

   if(window.innerWidth<768)
    return(
     <nav className='sticky  top-0  w-screen p-8 opacity-100  flex justify-around z-50'>
       <div>
           <Link href={"/"}>
               <span className='text-white  transition-all hover:text-2xl '>Portfolio</span>
           </Link>
       </div>
       <button
          onClick={() =>{ 
            setOpen(!open)}}
          className=" text-white  transition-all duration-300"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        {open && (
        <div className=" flex flex-col rounded-2xl p-2   fixed top-18 right-5 items-center opacity-100 bg-white shadow-md space-y-3 py-4 transition-all duration-300">
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#workExperience" onClick={() => setOpen(false)}>Work Experience</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#trainings" onClick={() => setOpen(false)}>Trainings/Certifications</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
     </nav>
    )
}

export default NavbarMobile