import { IconPin, IconPhone, IconEmail } from "@/ui/Icons"

const email = "binayugkiel7@gmail.com";
const contact_number = "+63 991 926 3048";
const location = "Cavite, Philippines";

export default function InfoIconHeader(){
    return (
        <div className="flex flex-wrap gap-5">
                {[
                  { icon: <IconPin />,   label: location },
                  { icon: <IconPhone />, label: contact_number },
                  { icon: <IconEmail />, label: email },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-[#888] text-[0.78rem]">
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
    )
}