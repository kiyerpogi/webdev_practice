import FooterIcon from "@/ui/FooterIcon";

export default function MyFooter( { updated_year, full_name }: { updated_year: number; full_name: string }) {
    return (
        <div className="border-t border-border-custom bg-white py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono text-[0.62rem] text-muted">© {`${updated_year} ${full_name}`}</span>
          <FooterIcon />
        </div>
      </div>
    )
}