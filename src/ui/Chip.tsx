export default function Chip({ label, variant = "tool" }: { label: string; variant?: "tool" | "lang" }) {
  const base = "inline-block px-2.5 py-0.5 rounded-full text-[0.68rem] border"
  const styles =
    variant === "lang"
      ? "font-mono bg-beige2 border-border-custom text-mid"
      : "bg-white border-border-custom text-mid hover:border-dark hover:text-dark transition-colors duration-150 cursor-default"
  return <span className={`${base} ${styles}`}>{label}</span>
}