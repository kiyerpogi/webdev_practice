const skills = [
  { name: "C++",        level: 30 },
  { name: "Java",       level: 30 },
  { name: "HTML5",      level: 45 },
  { name: "CSS3",       level: 40 },
  { name: "JavaScript", level: 35 },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-5">
      {children}
    </p>
  )
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

export default function MainLeft(){
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
}