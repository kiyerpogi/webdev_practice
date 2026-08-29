import SectionLabel from "@/ui/SectionLabel";

const objective_desc =
  "To grow as a developer through hands-on experience, continuous learning, and collaboration — building software that is useful and meaningful.";

export default function MyObjective(){
    return (
        <div className="bg-dark rounded-xl p-8">
              <SectionLabel>Objective</SectionLabel>
              <p className="font-serif italic text-base text-[#ccc] leading-loose">
                "{objective_desc}"
              </p>
            </div>
    )
}