const strip =
  "Passionate about technology and building things with code. Currently learning the fundamentals of software development through coursework and personal projects. Open to internships and collaborative opportunities."

  export default function MyStrip(){
    return (
        <div className="bg-beige2 border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[0.88rem] text-mid leading-relaxed max-w-[620px]">
            {strip}
          </p>
        </div>
      </div>
    )
}