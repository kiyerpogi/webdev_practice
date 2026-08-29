import SectionLabel from "@/ui/SectionLabel"

const softSkills = [
  "Problem Solving",
  "Logical Thinking",
  "Team Collaboration",
  "Time Management",
  "Eager to Learn",
]
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