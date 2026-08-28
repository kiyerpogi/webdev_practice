export default function MyFooter(){
    return (
        <div className="border-t border-border-custom bg-white py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
          <span className="font-mono text-[0.62rem] text-muted">© 2026 Kiervin Geda Binayug</span>
          <div className="flex gap-5">
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <span key={l} className="text-[0.75rem] text-muted cursor-pointer hover:text-dark transition-colors duration-150">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
}