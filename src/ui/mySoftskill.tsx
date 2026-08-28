const softSkills = [
  "Problem Solving",
  "Logical Thinking",
  "Team Collaboration",
  "Time Management",
  "Eager to Learn",
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

export default function MySoftskill(){
    return(
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
    )
}