import SectionLabel from "@/ui/SectionLabel"
import Chip from "@/ui/Chip";

export default function MyTool({ tools }: { tools: any }) {
    return(
        <div className="mb-10">
              <SectionLabel>Tools</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t: any) => <Chip key={t.id} label={t.name} />)}
              </div>
        </div>
    )
}