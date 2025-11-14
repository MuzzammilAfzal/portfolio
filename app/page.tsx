import React from "react";
import About from '@/Components/About'
import WorkExperience from "@/Components/WorkExperience"
import Projects from "@/Components/Projects"



export default function Home() {
  return (
      <div className="absolute  flex flex-wrap items-center justify-center z-10 ">
       <div id="about">
          <About/>
       </div>
       <div id="workExperience" >
          <WorkExperience/>
       </div>
       <div id="projects" >
          <Projects/>
       </div>
      </div>
  
  );
}
