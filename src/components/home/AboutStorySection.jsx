import { CheckCircle2 } from 'lucide-react'

export default function AboutStorySection() {
  const points = [
    'Family Functions & Gatherings',
    'Weddings & Engagements',
    'Religious Ceremonies & Poojas',
    'Community & Society Events',
  ]

  const stats = [
    { value: '2022', label: 'Established' },
    { value: '300+', label: 'Guests Capacity' },
    { value: 'Surat', label: 'Local Kitchen' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          
          {/* Left Column: Text & Event Types */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
              <span>About Neeta's Kitchen</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626] leading-[1.12]">
              Food Made Like Home, <br className="hidden sm:inline" />
              Served for Every Celebration.
            </h2>

            <div className="space-y-4 text-base text-[#666666] leading-relaxed">
              <p>
                Established in 2022, Neeta's Kitchen is an authentic family-owned catering kitchen based in Surat. We specialize in freshly prepared, pure vegetarian Gujarati and Punjabi dishes created with traditional home recipes and uncompromising purity.
              </p>
              <p>
                Whether you are hosting an auspicious home ritual or a celebratory dinner for up to 300 guests, our kitchen brings warmth, personal care, and genuine taste to your event.
              </p>
            </div>

            {/* Event Types Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#262626]">
                  <CheckCircle2 size={18} className="text-[#287A4A] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Editorial Statistics Panel */}
          <div className="flex flex-col justify-center rounded-3xl border border-[#E3E8E3] bg-[#F7F8F4] p-8 sm:p-10 shadow-[0_4px_20px_rgba(40,122,74,0.03)] text-left space-y-8">
            <div className="space-y-2 border-b border-[#E3E8E3] pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                Kitchen Standards
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#262626]">
                Dedicated to Pure Vegetarian Hospitality
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#287A4A]">
                    {st.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E3E8E3] text-xs text-[#666666] leading-relaxed">
              Every meal is prepared fresh on the day of your event, using handpicked ingredients and authentic home-style seasoning.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
