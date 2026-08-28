const education = [
  {
    degree: "BS Information Technology",
    school: "Cavite State University - Silang Campus",
    year: "2025 – Present",
    note: "2nd Year · GWA 1.75",
  },
  {
    degree: "Senior High School — STEM Track",
    school: "Philippine Christian University - Cavite",
    year: "2023 – 2025",
    note: "With Honors",
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-5">
      {children}
    </p>
  )
}

const IconSchool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
)

export default function MyEducation(){
    return(
        <div className="mb-10">
              <SectionLabel>Education</SectionLabel>
              <div className="flex flex-col gap-3">
                {education.map((e) => (
                  <div key={e.school} className="bg-white border border-border-custom rounded-xl p-5 flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-beige2 flex items-center justify-center shrink-0 text-mid">
                      <IconSchool />
                    </div>
                    <div>
                      <p className="font-semibold text-[0.88rem] text-dark mb-0.5">{e.degree}</p>
                      <p className="text-[0.8rem] text-mid mb-1">{e.school}</p>
                      <p className="font-mono text-[0.65rem] text-muted">{e.year} · {e.note}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>
    )
}