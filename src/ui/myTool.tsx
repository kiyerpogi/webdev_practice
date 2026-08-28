const tools = [
"VS Code", 
"React", 
"Git", 
"GitHub", 
"Figma", 
"Chrome DevTools"]


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted mb-5">
      {children}
    </p>
  )
}

function Chip({ label, variant = "tool" }: { label: string; variant?: "tool" | "lang" }) {
  const base = "inline-block px-2.5 py-0.5 rounded-full text-[0.68rem] border"
  const styles =
    variant === "lang"
      ? "font-mono bg-beige2 border-border-custom text-mid"
      : "bg-white border-border-custom text-mid hover:border-dark hover:text-dark transition-colors duration-150 cursor-default"
  return <span className={`${base} ${styles}`}>{label}</span>
}

export default function MyTool(){
    return(
        <div className="mb-10">
              <SectionLabel>Tools</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t) => <Chip key={t} label={t} />)}
              </div>
        </div>
    )
}