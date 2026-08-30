import SectionLabel from "@/ui/SectionLabel"

export default function MySoftskill({ softskills }: { softskills:any}) {
    return(
        <div>
              <SectionLabel>Soft Skills</SectionLabel>
              <div className="flex flex-col gap-2.5">
                {softskills.map((s: any) => (
                  <div key={s.id} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted shrink-0" />
                    <span className="text-[0.82rem] text-mid">{s.soft_skill}</span>
                  </div>
                ))}
              </div>
        </div>
    )
}