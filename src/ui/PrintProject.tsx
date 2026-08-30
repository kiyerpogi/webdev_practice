import Chip from '@/ui/Chip'


export default function PrintProject ({ projects }: { projects: any }) {
    return(
        <div>
            {projects?.map((p: any) => (
                <div
                    key={p.id}
                    className="bg-white border border-border-custom rounded-xl p-5 hover:border-dark transition-colors duration-150"
                    >
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <p className="font-semibold text-[0.88rem] text-dark">{p.title}</p>
                        <Chip label={p.lang} key={p.id} variant="lang" />
                    </div>
                        <p className="text-[0.8rem] text-muted leading-relaxed">{p.project_desc}</p>
                    </div>
            ))}
        </div>
    )
}