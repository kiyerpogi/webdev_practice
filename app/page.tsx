const skills = [
  { name: "C++",        level: 30 },
  { name: "Java",       level: 30 },
  { name: "HTML5",      level: 45 },
  { name: "CSS3",       level: 40 },
  { name: "JavaScript", level: 35 },
]

const tools = ["VS Code", "React", "Git", "GitHub", "Figma", "Chrome DevTools"]

const softSkills = [
  "Problem Solving",
  "Logical Thinking",
  "Team Collaboration",
  "Time Management",
  "Eager to Learn",
]

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

const achievements = [
  "Dean's List — 1st Year, 2nd Semester",
  "Participant — Intra-departmental Programming Contest (Java)",
  "Participant — ICPEP.SE Tech Summit 2024",
]

/* ── Inline SVG icons ──────────────────────────────────── */
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
const IconSchool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
)
const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
)
const IconTrophy = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
  </svg>
)

/* ── Small reusable components ─────────────────────────── */
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

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-[0.83rem] font-semibold text-dark">{name}</span>
        <span className="font-mono text-[0.65rem] text-muted">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-border-custom overflow-hidden">
        <div className="h-full rounded-full bg-dark" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-beige font-sans">

      {/* HEADER */}
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

      {/* ABOUT STRIP */}
      <div className="bg-beige2 border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[0.88rem] text-mid leading-relaxed max-w-[620px]">
            Passionate about technology and building things with code.
            Currently learning the fundamentals of software development
            through coursework and personal projects. Open to internships and
            collaborative opportunities.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">

          {/* LEFT */}
          <div>
            <div className="mb-10">
              <SectionLabel>Skills</SectionLabel>
              {skills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>

            <div className="mb-10">
              <SectionLabel>Tools</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t) => <Chip key={t} label={t} />)}
              </div>
            </div>

            <div>
              <SectionLabel>Soft Skills</SectionLabel>
              <div className="flex flex-col gap-2.5">
                {softSkills.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
                    <span className="text-[0.82rem] text-mid">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            {/* Education */}
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

            {/* Projects */}
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

            {/* Achievements */}
            <div className="mb-10">
              <SectionLabel>Achievements</SectionLabel>
              <div className="flex flex-col gap-2.5">
                {achievements.map((a) => (
                  <div
                    key={a}
                    className="bg-white border border-border-custom rounded-xl p-4 flex items-center gap-3 hover:border-dark transition-colors duration-150"
                  >
                    <span className="text-muted shrink-0"><IconTrophy /></span>
                    <span className="text-[0.82rem] text-mid">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective */}
            <div className="bg-dark rounded-xl p-8">
              <p className="font-mono text-[0.58rem] text-[#666] tracking-[0.2em] uppercase mb-4">
                Objective
              </p>
              <p className="font-serif italic text-base text-[#ccc] leading-loose">
                "To grow as a developer through hands-on experience, continuous learning,
                and collaboration — building software that is useful and meaningful."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-border-custom bg-white py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono text-[0.62rem] text-muted">© 2026 Kiervin Geda Binayug</span>
          <div className="flex gap-5">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <span key={l} className="text-[0.75rem] text-muted cursor-pointer hover:text-dark transition-colors duration-150">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
