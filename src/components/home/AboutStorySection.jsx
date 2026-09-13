export default function AboutStorySection() {
  const stats = [
    { value: '2022', label: 'Established' },
    { value: '300+', label: 'Guests' },
    { value: 'Surat', label: 'Local Kitchen' },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F6EFE5]/50 border-t border-[#E5D5C8]">
      <div className="mx-auto max-w-[1220px] px-4.5 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          {/* Section Subtitle Badge */}
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B1328]">
              About Neeta's Kitchen
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#332A24] leading-tight">
            Food Made Like Home, <br className="hidden sm:inline" />
            Served for Every Celebration.
          </h2>

          {/* Description */}
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#332A24]/85 leading-relaxed">
            <p>
              Established in 2022, Neeta's Kitchen is an authentic family-owned catering kitchen based in Surat. We specialize in freshly prepared, pure vegetarian Gujarati and Punjabi dishes created with traditional home recipes and uncompromising purity.
            </p>
            <p>
              Whether you are hosting an auspicious home ritual or a celebratory dinner for up to 300 guests, our kitchen brings warmth, personal care, and genuine taste to your event.
            </p>
          </div>

          {/* Facts / Stats */}
          <div className="mt-8 pt-6 border-t border-[#E5D5C8] grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((st, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#8B1328]">
                  {st.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#332A24]/70">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
