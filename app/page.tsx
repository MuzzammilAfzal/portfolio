import React from "react";
import About from '@/Components/About'
import WorkExperience from "@/Components/WorkExperience"



export default function Home() {
  return (
      <div className="absolute  flex flex-wrap items-center justify-center z-10 ">
       <About/>
       <WorkExperience/>
      </div>
  
  );
}
