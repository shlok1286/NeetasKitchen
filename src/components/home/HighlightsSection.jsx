import { Sparkles, Heart, UtensilsCrossed, MapPin, Users, ShieldCheck } from 'lucide-react'

export default function HighlightsSection() {
  const highlights = [
    {
      icon: <ShieldCheck size={20} className="text-[#287A4A]" />,
      title: '100% Pure Vegetarian',
      desc: 'Authentic home-style food',
    },
    {
      icon: <Heart size={20} className="text-[#287A4A]" />,
      title: 'Family Kitchen',
      desc: 'Freshly prepared with care',
    },
    {
      icon: <UtensilsCrossed size={20} className="text-[#287A4A]" />,
      title: 'Authentic Flavours',
      desc: 'Gujarati & Punjabi cuisine',
    },
    {
      icon: <MapPin size={20} className="text-[#287A4A]" />,
      title: 'Serving Surat',
      desc: 'Local catering service',
    },
    {
      icon: <Users size={20} className="text-[#287A4A]" />,
      title: 'Up to 300 Guests',
      desc: 'Intimate & large gatherings',
    },
  ]

  return (
    <section className="py-12 bg-[#F7F8F4] border-y border-[#E3E8E3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start text-center sm:text-left rounded-2xl border border-[#E3E8E3] bg-white p-5 shadow-[0_2px_12px_rgba(40,122,74,0.04)] hover:border-[#287A4A]/40 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4EC] mb-3 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-[#262626]">
                {item.title}
              </h3>
              <p className="text-xs text-[#666666] mt-0.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
