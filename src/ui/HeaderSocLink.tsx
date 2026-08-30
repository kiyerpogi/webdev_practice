import { IconEmail, IconGithub, IconLinkedin } from "@/ui/Icons"

const social_links = {
  github: "https://github.com/binayugkiel7",
  linkedin: "https://linkedin.com/in/binayugkiel7",
  email: "binayugkiel7@gmail.com"
};

export default function SocLinkHeader(){
    return(
        <div className="flex gap-2">
                {[
                  { icon: <IconGithub />,   label: social_links.github },
                  { icon: <IconLinkedin />, label: social_links.linkedin },
                  { icon: <IconEmail />,    label: social_links.email },
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