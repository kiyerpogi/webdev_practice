import SectionLabel from "@/ui/SectionLabel"
import Chip from "@/ui/Chip";

const tools = [
"VS Code", 
"React", 
"Git", 
"GitHub", 
"Figma", 
"Chrome DevTools"]

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