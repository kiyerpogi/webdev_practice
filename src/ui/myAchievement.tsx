const achievements = [
  "Dean's List — 1st Year, 2nd Semester",
  "Participant — Intra-departmental Programming Contest (Java)",
  "Participant — ICPEP.SE Tech Summit 2024",
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-5">
      {children}
    </p>
  )
}

const IconTrophy = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
  </svg>
)



export default function MyAchievement(){
    return(
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
    )
}