const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)
const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
  </svg>
)
const IconEmail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)
const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
  </svg>
)
const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H6.5v-7H9v7zM7.75 8.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 17h-2.5v-3.5c0-1-.75-1.75-1.75-1.75s-1.75.75-1.75 1.75V17H9.5v-7H12v1c.5-.75 1.5-1.25 2.5-1.25C16.5 9.75 18 11.25 18 13.5V17z"/>
  </svg>
)

export default function MyHeader(){
    return(
        <div className="bg-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">

            <div className="flex-1">
              <p className="font-mono text-[0.62rem] text-muted tracking-[0.2em] uppercase mb-3">
                Portfolio · 2026
              </p>
              <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] font-normal leading-tight mb-2">
                Kiervin Geda Binayug
              </h1>
              <p className="font-serif italic text-base text-[#aaa] mb-6">
                IT Student · Aspiring Developer
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <IconPin />,   label: "Cavite, Philippines" },
                  { icon: <IconPhone />, label: "+63 991 926 3048" },
                  { icon: <IconEmail />, label: "binayugkiel7@gmail.com" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-[#888] text-[0.78rem]">
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-4">
              <div className="w-[90px] h-[90px] rounded-full bg-[#3d3d3d] border-2 border-[#555] flex items-center justify-center font-serif text-2xl select-none">
                KB
              </div>
              <div className="flex gap-2">
                {[
                  { icon: <IconGithub />,   label: "GitHub" },
                  { icon: <IconLinkedin />, label: "LinkedIn" },
                  { icon: <IconEmail />,    label: "Email" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    title={label}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-[#3d3d3d] text-[#888] hover:text-white hover:border-[#666] transition-all duration-150 bg-transparent cursor-pointer"
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}