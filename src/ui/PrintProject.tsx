import Chip from '@/ui/Chip'

const projects = [
  {
    title: "Student Grade Calculator",
    lang: "C++",
    desc: "Console app that computes final grades by averaging quiz, midterm, and exam scores, then maps them to letter grades.",
  },
  {
    title: "Simple Banking System",
    lang: "Java",
    desc: "Simulates basic banking — deposit, withdraw, balance inquiry — using classes and object-oriented design.",
  },
  {
    title: "Personal Portfolio Website",
    lang: "HTML / CSS / JS",
    desc: "Static personal site built from scratch with a light/dark mode toggle in vanilla JavaScript.",
  },
]


export default function PrintProject(){
    return(
        <div>
            {projects.map((p) => (
                <div
                    key={p.title}
                    className="bg-white border border-border-custom rounded-xl p-5 hover:border-dark transition-colors duration-150"
                    >
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <p className="font-semibold text-[0.88rem] text-dark">{p.title}</p>
                        <Chip label={p.lang} variant="lang" />
                    </div>
                        <p className="text-[0.8rem] text-muted leading-relaxed">{p.desc}</p>
                    </div>
            ))}
        </div>
    )
}