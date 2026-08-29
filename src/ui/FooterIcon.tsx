import { IconGithub, IconLinkedin, IconEmail } from "@/ui/Icons"

export default function FooterIcon() {
    return(
         <div className="flex gap-4">
            {[
                  { icon: <IconGithub />,   label: "GitHub" },
                  { icon: <IconLinkedin />, label: "LinkedIn" },
                  { icon: <IconEmail />,    label: "Email" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    title={label}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-[#3d3d3d] text-[#888] hover:text-white hover:border-[#666] transition-all duration-150 bg-transparent cursor-pointer"
                  >
                    {icon}
                  </button>
                ))}
          </div>
    )
}