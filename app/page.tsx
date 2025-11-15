import React from "react";
import About from '@/Components/About'
import WorkExperience from "@/Components/WorkExperience"
import Projects from "@/Components/Projects"
import Trainings from "@/Components/trainings"
import Skills from '@/Components/skills'
import  Contact from "@/Components/Contact";



export default function Home() {
  return (
      <div className="absolute  flex flex-wrap items-center justify-center z-10 ">
       <div id="about" className="">
          <About/>
       </div>
       <div id="workExperience" className="" >
          <WorkExperience/>
       </div>
       <div id="trainings" >
         <Trainings/>
       </div>
       <div id="projects" >
          <Projects/>
       </div>
       <div id="skills" >
          <Skills/>
       </div>
       <div id="contact" >
          <Contact/>
       </div>
      </div>
  
  );
}
