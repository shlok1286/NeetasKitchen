import { ShieldCheck, Heart, Leaf, SlidersHorizontal, Utensils, Users } from 'lucide-react'

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <ShieldCheck size={22} className="text-[#287A4A]" aria-hidden="true" />,
      title: 'Pure Vegetarian',
      desc: 'Strictly 100% vegetarian preparation maintaining absolute purity, hygiene, and traditional standards.',
    },
    {
      icon: <Heart size={22} className="text-[#287A4A]" aria-hidden="true" />,
      title: 'Homemade Preparation',
      desc: 'Cooked in fresh small batches with traditional methods, hand-ground spices, and family warmth.',
    },
    {
      icon: <Leaf size={22} className="text-[#287A4A]" aria-hidden="true" />,
      title: 'Fresh Ingredients',
      desc: 'Locally sourced vegetables, fresh dairy, and quality grains handpicked daily for your occasion.',
    },
    {
      icon: <SlidersHorizontal size={22} className="text-[#287A4A]" aria-hidden="true" />,
      title: 'Customized Menus',
      desc: 'Complete freedom to handpick every appetizer, curry, bread, and sweet dish for your event.',
    },
    {
      icon: <Utensils size={22} className="text-[#287A4A]" aria-hidden="true" />,
      title: 'Authentic Flavours',
      desc: 'Signature Gujarati and North Indian Punjabi taste profiles seasoned with balanced spices.',
    },
    {
      icon: <Users size={22} className="text-[#287A4A]" aria-hidden="true" />,
      title: 'Up to 300 Guests',
      desc: 'Focused capacity ensuring attentive logistics, consistent taste, and personal hospitality.',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#F7F8F4] border-y border-[#E3E8E3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626]">
            Why Families Choose Neeta's Kitchen
          </h2>
          <p className="text-base text-[#666666] max-w-xl mx-auto">
            Thoughtful standards that bring peace of mind, reliable service, and authentic taste to your celebrations.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#E3E8E3] bg-white p-8 text-left shadow-[0_2px_16px_rgba(40,122,74,0.03)] hover:border-[#287A4A]/50 hover:shadow-[0_8px_30px_rgba(40,122,74,0.06)] transition-all"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4EC] mb-5">
                  {feat.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#262626] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
