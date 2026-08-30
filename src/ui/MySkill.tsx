import SectionLabel from "@/ui/SectionLabel"
import SkillBar from "@/ui/SkillBar"

export default function MySkill({ skills }: { skills: any }) {
    return(
        <div>
            <div className="mb-10">
              <SectionLabel>Skills</SectionLabel>
              {skills.map((s: any) => <SkillBar key={s.skill_name} {...s} />)}
            </div>
        </div>
    )
}