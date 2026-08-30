import {IconCode} from '@/ui/Icons'
import SectionLabel from "@/ui/SectionLabel"
import PrintProject from "@/ui/PrintProject"

export default function MyProject({ projects }: { projects: any }) {
    return(
        <div className="mb-10">
              <SectionLabel>Projects</SectionLabel>
              <div className="flex flex-col gap-3">
                <PrintProject projects={projects} />
                  <div className="border-2 border-dashed border-border-custom rounded-xl p-5 flex items-center gap-3 text-[#bbb]">
                    <IconCode />
                    <span className="text-[0.78rem]">More projects in progress...</span>
                  </div>
            </div>
        </div>
    )
}