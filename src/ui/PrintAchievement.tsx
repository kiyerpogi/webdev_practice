import { IconTrophy } from "@/ui/Icons"

const achievements = [
  "Dean's List — 1st Year, 2nd Semester",
  "Participant — Intra-departmental Programming Contest (Java)",
  "Participant — ICPEP.SE Tech Summit 2024",
]

export default function PrintAchievement(){
    return(
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
    )
}