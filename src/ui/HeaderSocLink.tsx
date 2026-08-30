import { IconEmail, IconGithub, IconLinkedin } from "@/ui/Icons"

export default function HeaderSocLink({ social_links }: { social_links: { github: string; linkedin: string; email: string } }) {
    return(
        <div className="flex gap-2">
          <div><IconGithub />{social_links.github}</div>
          <div><IconLinkedin />{social_links.linkedin}</div>
          <div><IconEmail />{social_links.email}</div>
        </div>
    )
}