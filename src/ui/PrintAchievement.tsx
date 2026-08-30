import { IconTrophy } from "@/ui/Icons"

export default function PrintAchievement( { achievements }: { achievements: any }) {
    return(
        <div className="flex flex-col gap-2.5">
                {achievements.map((a: any) => (
                  <div
                    key={a.id}
                    className="bg-white border border-border-custom rounded-xl p-4 flex items-center gap-3 hover:border-dark transition-colors duration-150"
                  >
                    <span className="text-muted shrink-0"><IconTrophy /></span>
                    <span className="text-[0.82rem] text-mid">{a.name}</span>
                  </div>
                ))}
            </div>
    )
}