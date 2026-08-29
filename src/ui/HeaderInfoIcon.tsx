import { IconPin, IconPhone, IconEmail } from "@/ui/Icons"

export default function InfoIconHeader(){
    return (
        <div className="flex flex-wrap gap-5">
                {[
                  { icon: <IconPin />,   label: "Cavite, Philippines" },
                  { icon: <IconPhone />, label: "+63 991 926 3048" },
                  { icon: <IconEmail />, label: "binayugkiel7@gmail.com" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-[#888] text-[0.78rem]">
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
    )
}