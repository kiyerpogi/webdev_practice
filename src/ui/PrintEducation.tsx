import { IconSchool } from "@/ui/Icons"

const education = [
  {
    degree: "BS Information Technology",
    school: "Cavite State University - Silang Campus",
    year: "2025 – Present",
    note: "2nd Year · GWA 1.75",
  },
  {
    degree: "Senior High School — STEM Track",
    school: "Philippine Christian University - Cavite",
    year: "2023 – 2025",
    note: "With Honors",
  },
]

export default function PrintEducation(){
    return (
        <div className="flex flex-col gap-3">
                {education.map((e) => (
                  <div key={e.school} className="bg-white border border-border-custom rounded-xl p-5 flex gap-4">
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