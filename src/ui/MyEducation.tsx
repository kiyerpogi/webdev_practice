import SectionLabel from "@/ui/SectionLabel"
import PrintEducation from "./PrintEducation"

export default function MyEducation({ educations }: { educations: any }) {
    return(
        <div className="mb-10">
              <SectionLabel>Education</SectionLabel>
              <PrintEducation educations={educations} />
        </div>
    )
}