import SocLinkHeader from "@/ui/HeaderSocLink";
import InfoIconHeader from "@/ui/HeaderInfoIcon";
import NameInitial from "@/ui/NameInitial";
import { name, updated_year } from "@/ui/MyFooter"

const profession = "IT Student • Aspiring Developer";

export default function MyHeader(){
    return(
      <div className="bg-dark text-white py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                  <div className="flex-1">
              <p className="font-mono text-[0.62rem] text-muted tracking-[0.2em] uppercase mb-3">
                Portfolio · {updated_year}
              </p>
              <h1 className="font-serif text-[2.4rem] md:text-[3.2rem] font-normal leading-tight mb-2">
                {name} 
              </h1>
              <p className="font-serif italic text-base text-[#aaa] mb-6">
                {profession}
              </p>
              <InfoIconHeader />
            </div>
            <div className="flex flex-col items-start sm:items-end gap-4">
              <NameInitial />
              <SocLinkHeader />
            </div>
                </div>
            </div>
        </div>
    )
}