import SectionLabel from "@/ui/SectionLabel"
import SkillBar from "@/ui/SkillBar"

const skills = [
  { name: "C++",        level: 30 },
  { name: "Java",       level: 30 },
  { name: "HTML5",      level: 45 },
  { name: "CSS3",       level: 40 },
  { name: "JavaScript", level: 35 },
]

export default function MySkill(){
    return(
        <div>
            <div className="mb-10">
              <SectionLabel>Skills</SectionLabel>
              {skills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
        </div>
    )
}