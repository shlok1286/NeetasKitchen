import {
  STARTERS,
  COMPLETE_DISHES,
  SHAAKS,
  BREADS,
  DALS,
  RICE,
  SWEETS,
  COMPLIMENTARY,
} from '../../constants/menuData'
import { business } from '../../constants/business'

export default function MenuSection() {
  const categoriesOrdered = [
    { id: 'starters', title: 'Starters', items: STARTERS },
    { id: 'shaaks', title: 'Shaak', items: SHAAKS },
    { id: 'rice_khichdi', title: 'Rice & Khichdi', items: RICE },
    { id: 'complete_dishes', title: 'Complete Dishes', items: COMPLETE_DISHES },
    { id: 'breads', title: 'Breads', items: BREADS },
    { id: 'dals', title: 'Dal', items: DALS },
    { id: 'sweets', title: 'Sweets', items: SWEETS },
    { id: 'complimentary', title: 'Complimentary', items: COMPLIMENTARY },
  ]

  // Desktop 2-column distribution for balanced height
  const desktopColOne = [
    categoriesOrdered[0], // Starters (14 items)
    categoriesOrdered[2], // Rice & Khichdi (4 items)
    categoriesOrdered[6], // Sweets (2 items)
    categoriesOrdered[7], // Complimentary (2 items)
  ]

  const desktopColTwo = [
    categoriesOrdered[1], // Shaak (11 items)
    categoriesOrdered[3], // Complete Dishes (2 items)
    categoriesOrdered[4], // Breads (2 items)
    categoriesOrdered[5], // Dal (4 items)
  ]

  const renderCategoryBlock = (cat) => (
    <div key={cat.id} className="space-y-3">
      {/* Burgundy heading + subtle gold divider */}
      <div className="flex items-center justify-between pb-1.5 border-b border-[#E5D5C8]">
        <span className="inline-block rounded-full bg-[#8B1328] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
          {cat.title}
        </span>
        <div className="h-px flex-grow ml-4 bg-gradient-to-r from-[#B99A5B]/60 via-[#B99A5B]/20 to-transparent" />
      </div>

      {/* Food Items List */}
      <div className="space-y-2 pt-0.5">
        {cat.items.map((item) => (
          <div
            key={item.id}
            className="py-1.5 border-b border-[#E5D5C8]/40 last:border-b-0"
          >
            <div className="font-sans text-[16px] sm:text-[17px] font-semibold text-[#332A24] leading-snug">
              {item.name}
            </div>
            <div className="font-gujarati text-[13px] sm:text-[14px] font-normal text-[#64101E] opacity-75 mt-0.5">
              ({item.gujaratiName})
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const gatheringWhatsappMessage = "Hello Neeta's Kitchen, I am planning a family gathering / event and would like to inquire about your pure vegetarian catering menu."
  const gatheringWhatsappUrl = `${business.whatsappBaseUrl}?text=${encodeURIComponent(gatheringWhatsappMessage)}`

  return (
    <section id="menu" className="py-10 sm:py-14 bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1220px] px-4.5 sm:px-6 lg:px-8">
        
        {/* Strong Menu Header */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Pure Vegetarian Identity */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B99A5B]/40 bg-[#F6EFE5] px-4 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1328] mb-3 shadow-[0_1px_4px_rgba(100,16,30,0.04)]">
            <span>100% PURE VEGETARIAN · HOMEMADE · SURAT</span>
          </div>

          <p className="font-display text-base sm:text-lg font-bold tracking-wide text-[#332A24]">
            Neeta's Kitchen
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#8B1328] uppercase mt-0.5">
            Our Menu
          </h1>

          <p className="font-sans text-sm sm:text-base font-medium text-[#332A24]/85 mt-2">
            “Pure Vegetarian • Gujarati &amp; Punjabi • Homemade with Care”
          </p>

          {/* Elegant gold divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-px w-12 sm:w-16 bg-[#B99A5B]" />
            <span className="text-xs text-[#B99A5B]">✦</span>
            <span className="h-px w-12 sm:w-16 bg-[#B99A5B]" />
          </div>
        </div>

        {/* Printed Menu Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#E5D5C8] bg-white p-5 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(100,16,30,0.04)]">
          {/* Desktop Two-Column Layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-start">
            <div className="space-y-8 sm:space-y-10">
              {desktopColOne.map(renderCategoryBlock)}
            </div>
            <div className="space-y-8 sm:space-y-10">
              {desktopColTwo.map(renderCategoryBlock)}
            </div>
          </div>

          {/* Mobile Single-Column Sequential Layout */}
          <div className="space-y-8 md:hidden">
            {categoriesOrdered.map(renderCategoryBlock)}
          </div>
        </div>

        {/* Celebration CTA */}
        <div className="mt-10 sm:mt-14 rounded-2xl border border-[#E5D5C8] bg-[#F6EFE5]/70 p-6 sm:p-8 text-center max-w-xl mx-auto shadow-[0_2px_12px_rgba(100,16,30,0.03)]">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B1328]">
            Neeta's Kitchen
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#332A24] mt-1">
            Planning a family gathering?
          </h3>
          <p className="text-sm sm:text-base text-[#332A24]/80 mt-2 max-w-md mx-auto leading-relaxed">
            From intimate home rituals to celebratory dinners for up to 300 guests, our kitchen prepares fresh, authentic pure vegetarian meals with home-style taste and care.
          </p>
          <div className="mt-5">
            <a
              href={gatheringWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 text-xs sm:text-sm font-semibold uppercase tracking-wider !text-white"
            >
              <span className="!text-white">WHATSAPP US →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
