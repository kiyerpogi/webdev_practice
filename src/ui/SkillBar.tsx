export default function SkillBar({ skill_name, level }: { skill_name: string; level: number }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="text-[0.83rem] font-semibold text-dark">{skill_name}</span>
        <span className="font-mono text-[0.65rem] text-muted">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-border-custom overflow-hidden">
        <div className="h-full rounded-full bg-dark" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}