export default function ResumeViewer() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/files/resume.pdf"
        className="w-full h-full border-none z-10 absolute opacity-80"
        title="Resume PDF"
      ></iframe>
    </div>
  );
}
