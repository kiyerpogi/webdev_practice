import { IconSchool } from "@/ui/Icons"

export default function PrintEducation({ educations }: { educations: any }) {
    return (
        <div className="flex flex-col gap-3">
                {educations.map((e: any) => (
                  <div key={e.id} className="bg-white border border-border-custom rounded-xl p-5 flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-beige2 flex items-center justify-center shrink-0 text-mid">
                      <IconSchool />
                    </div>
                    <div>
                      <p className="font-semibold text-[0.88rem] text-dark mb-0.5">{e.degree}</p>
                      <p className="text-[0.8rem] text-mid mb-1">{e.school}</p>
                      <p className="font-mono text-[0.65rem] text-muted">{e.year} · {e.note}</p>
                    </div>
                  </div>
                ))}
              </div>
    )
}