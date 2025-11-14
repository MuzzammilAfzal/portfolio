"use client"
import { useParams } from "next/navigation";

export default function ResumeViewer() {
  const { file } = useParams();  
  console.log(file);             
  return (
    <div className="w-full h-screen">
      <iframe
        src={`/files/${file}.pdf`}   
        className="w-full h-full border-none z-10 absolute opacity-80"
        title="PDF"
      ></iframe>
    </div>
  );
}
