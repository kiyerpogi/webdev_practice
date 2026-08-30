import { IconPin, IconPhone, IconEmail } from "@/ui/Icons"

export default function InfoIconHeader({ location, contact_number, email }: { location: string; contact_number: string; email: string }) {
    return (
        <div className="flex flex-wrap gap-5">
                  <div><IconPin /></div>
                  <div key={location} className="flex items-center gap-1.5 text-[#888] text-[0.78rem]">
                    <span>{location}</span>
                  </div>
                  <div><IconPhone /></div>
                  <div key={contact_number} className="flex items-center gap-1.5 text-[#888] text-[0.78rem]">
                    <span>{contact_number}</span>
                  </div>
                  <div><IconEmail /></div>
                  <div key={email} className="flex items-center gap-1.5 text-[#888] text-[0.78rem]">
                    <span>{email}</span>
                  </div>
              </div>
    )
}