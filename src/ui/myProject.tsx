const projects = [
  {
    title: "Student Grade Calculator",
    lang: "C++",
    desc: "Console app that computes final grades by averaging quiz, midterm, and exam scores, then maps them to letter grades.",
  },
  {
    title: "Simple Banking System",
    lang: "Java",
    desc: "Simulates basic banking — deposit, withdraw, balance inquiry — using classes and object-oriented design.",
  },
  {
    title: "Personal Portfolio Website",
    lang: "HTML / CSS / JS",
    desc: "Static personal site built from scratch with a light/dark mode toggle in vanilla JavaScript.",
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-5">
      {children}
    </p>
  )
}

function Chip({ label, variant = "tool" }: { label: string; variant?: "tool" | "lang" }) {
  const base = "inline-block px-2.5 py-0.5 rounded-full text-[0.68rem] border"
  const styles =
    variant === "lang"
      ? "font-mono bg-beige2 border-border-custom text-mid"
      : "bg-white border-border-custom text-mid hover:border-dark hover:text-dark transition-colors duration-150 cursor-default"
  return <span className={`${base} ${styles}`}>{label}</span>
}

const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
)


export default function MyProject(){
    return(
        <div className="mb-10">
              <SectionLabel>Projects</SectionLabel>
              <div className="flex flex-col gap-3">
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className="bg-white border border-border-custom rounded-xl p-5 hover:border-dark transition-colors duration-150"
                  >
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <p className="font-semibold text-[0.88rem] text-dark">{p.title}</p>
                      <Chip label={p.lang} variant="lang" />
                    </div>
                    <p className="text-[0.8rem] text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}

                <div className="border-2 border-dashed border-border-custom rounded-xl p-5 flex items-center gap-3 text-[#bbb]">
                  <IconCode />
                  <span className="text-[0.78rem]">More projects in progress...</span>
                </div>
            </div>
        </div>
    )
}