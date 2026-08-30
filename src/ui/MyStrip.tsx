export default function MyStrip({ my_strip }: { my_strip: any }) {
    return (
        <div className="bg-beige2 border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <p className="text-[0.88rem] text-mid leading-relaxed max-w-[620px]">
            {my_strip}
          </p>
        </div>
      </div>
    )
}