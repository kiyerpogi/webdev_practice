import SectionLabel from "@/ui/SectionLabel";

export default function MyObjective({ objective_desc }: { objective_desc: any }) {
    return (
        <div className="bg-dark rounded-xl p-8">
              <SectionLabel>Objective</SectionLabel>
              <p className="font-serif italic text-base text-[#ccc] leading-loose">
                "{objective_desc}"
              </p>
            </div>
    )
}