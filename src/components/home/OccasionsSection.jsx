export default function OccasionsSection() {
  const occasions = [
    'Weddings',
    'Engagements',
    'Birthdays',
    'Baby Showers',
    'Housewarming',
    'Satyanarayan Katha',
    'Pooja',
    'Family Gatherings',
    'Society Functions',
    'Corporate Events',
    'Besnu',
    'Baarmu',
    'Other Family Functions',
  ]

  return (
    <section className="py-10 sm:py-14 bg-[#F6EFE5]/40 border-t border-[#E5D5C8]">
      <div className="site-container">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B1328]">
            Events &amp; Celebrations
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#8B1328] mt-1">
            Catering for Your Occasion
          </h2>
          <p className="text-sm sm:text-base text-[#332A24]/80 mt-2 leading-relaxed">
            We provide full catering services across Surat for auspicious family ceremonies, community events, and celebratory gatherings up to 300 persons.
          </p>
        </div>

        {/* Occasions Badges Grid */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
          {occasions.map((occ, idx) => (
            <div
              key={idx}
              className="rounded-full border border-[#E5D5C8] bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-[#332A24] shadow-[0_1px_4px_rgba(100,16,30,0.03)] hover:border-[#8B1328] hover:text-[#8B1328] transition-colors"
            >
              {occ}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
