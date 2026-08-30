import HeaderSocLink from "@/ui/HeaderSocLink";
import InfoIconHeader from "@/ui/HeaderInfoIcon";
import NameInitial from "@/ui/NameInitial";

  export default function MyHeader({ profiles}: { profiles: any}) {
    return(
      <div className="bg-dark text-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                  <div className="flex-1">
              <p className="font-mono text-[0.62rem] text-muted tracking-[0.2em] uppercase mb-3">
                Portfolio · {profiles.updated_year}
              </p>
              <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] font-normal leading-tight mb-2">
                {profiles.full_name} 
              </h1>
              <p className="font-serif italic text-base text-[#aaa] mb-6">
                {profiles.profession}
              </p>
              <InfoIconHeader location={profiles.location} contact_number={profiles.contact_number} email={profiles.email} />
            </div>
            <div className="flex flex-col items-start sm:items-end gap-4">
              <NameInitial initial={profiles.initials} />
              <HeaderSocLink social_links={profiles.social_links} />
            </div>
                </div>
            </div>
        </div>
    )
}