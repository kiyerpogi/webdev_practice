import SectionLabel from "@/ui/SectionLabel"
import PrintAchievement from "./PrintAchievement"

export default function MyAchievement({ achievements }: { achievements: any }) {
    return(
        <div className="mb-10">
              <SectionLabel>Achievements</SectionLabel>
              <PrintAchievement achievements={achievements} />
        </div>
    )
}