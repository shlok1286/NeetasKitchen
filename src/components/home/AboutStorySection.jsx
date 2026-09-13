export default function AboutStorySection() {
  const highlights = [
    { value: '2022', label: 'Established' },
    { value: '300', label: 'Guests' },
    { value: 'Surat', label: 'Local Base' },
  ]

  return (
    <section id="about" className="py-6 sm:py-8 lg:py-10 bg-[#FBF7F0] border-t border-[#E5D5C8]">
      <div className="site-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-2.5 text-left">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8B1328]">
                About Neeta's Kitchen
              </span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#332A24] leading-snug">
              Homemade Pure Vegetarian Catering
            </h2>

            <div className="space-y-2.5 text-sm sm:text-[15px] text-[#332A24]/85 leading-relaxed">
              <p>
                Established in 2022, Neeta's Kitchen is a family-owned catering kitchen in Surat specializing in homemade pure vegetarian Gujarati and Punjabi food.
              </p>
              <p>
                Every dish is prepared with authentic home-style care, traditional flavours, and uncompromising cleanliness. Whether you are hosting family functions, celebrations, religious occasions, or community gatherings for up to 300 persons, we provide warm, reliable catering right to your venue.
              </p>
            </div>
          </div>

          {/* Right Column: Standards & Highlights Panel */}
          <div className="lg:col-span-5 rounded-2xl border border-[#E5D5C8] bg-white p-4 sm:p-5 shadow-[0_2px_10px_rgba(100,16,30,0.03)] text-left space-y-3">
            <div className="border-b border-[#E5D5C8] pb-2">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#8B1328]">
                Catering Standards
              </p>
              <h3 className="font-display text-base font-bold text-[#332A24] mt-0.5">
                Pure Vegetarian Hospitality
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {highlights.map((st, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="font-display text-xl sm:text-2xl font-extrabold text-[#8B1328] leading-none">
                    {st.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#332A24]/70 mt-1 truncate">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#332A24]/70 pt-2 border-t border-[#E5D5C8] leading-relaxed">
              Freshly cooked on the day of your function using pure ingredients and traditional home recipes.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
