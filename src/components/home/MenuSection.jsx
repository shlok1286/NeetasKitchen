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

export default function MenuSection() {
  const columnOneCategories = [
    { id: 'starters', title: 'STARTERS', items: STARTERS },
    { id: 'complete_dishes', title: 'COMPLETE DISHES', items: COMPLETE_DISHES },
    { id: 'sweets', title: 'SWEETS', items: SWEETS },
    { id: 'complimentary', title: 'COMPLIMENTARY', items: COMPLIMENTARY },
  ]

  const columnTwoCategories = [
    { id: 'shaak', title: 'SHAAK', items: SHAAKS },
    { id: 'bread', title: 'BREAD', items: BREADS },
    { id: 'dal', title: 'DAL', items: DALS },
    { id: 'rice', title: 'RICE', items: RICE },
  ]

  const renderCategory = (cat) => (
    <div key={cat.id} className="space-y-3">
      {/* Category Heading with Cherry Red pill and subtle gold divider */}
      <div className="flex items-center justify-between pb-1.5 border-b border-[#E5D5C8]">
        <span className="inline-block rounded-full bg-[#8B1328] px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-sm">
          {cat.title}
        </span>
        <div className="h-px flex-grow ml-4 bg-gradient-to-r from-[#B99A5B]/60 via-[#B99A5B]/20 to-transparent" />
      </div>

      {/* Clean list items */}
      <div className="space-y-2 pt-0.5">
        {cat.items.map((item) => (
          <div
            key={item.id}
            className="py-1.5 border-b border-[#E5D5C8]/40 last:border-b-0 text-left"
          >
            <div className="font-sans text-[16px] sm:text-[17px] font-semibold text-[#332A24] leading-snug">
              {item.name}
            </div>
            <div className="font-gujarati text-[13px] sm:text-[14px] font-normal text-[#64101E] opacity-75 mt-0.5">
              ({item.gujaratiName})
            </div>
            {item.hasAmulButterOption && (
              <div className="text-[11px] sm:text-xs text-[#8B1328] font-medium mt-0.5 italic">
                Amul Butter available on request. Additional charges may apply.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="menu" className="pt-6 sm:pt-8 pb-10 sm:pb-14 bg-[#FBF7F0]">
      <div className="site-container">
        
        {/* Minimal Immediate Menu Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#8B1328] uppercase">
            Our Catering Menu
          </h1>
          <p className="text-sm sm:text-base font-medium text-[#332A24]/85 mt-1.5">
            Pure Vegetarian • Homemade Catering • Surat
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64101E] mt-3">
            <span className="rounded-full bg-[#F6EFE5] px-3.5 py-0.5 border border-[#E5D5C8]">
              Up to 300 Persons
            </span>
            <span className="text-[#B99A5B] hidden sm:inline">✦</span>
            <span className="rounded-full bg-[#F6EFE5] px-3.5 py-0.5 border border-[#E5D5C8]">
              Surat &amp; Within Surat
            </span>
            <span className="text-[#B99A5B] hidden sm:inline">✦</span>
            <span className="rounded-full bg-[#F6EFE5] px-3.5 py-0.5 border border-[#E5D5C8]">
              Pure Vegetarian
            </span>
          </div>
        </div>

        {/* Printed Menu Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#E5D5C8] bg-white p-6 sm:p-8 md:p-10 shadow-[0_4px_24px_rgba(100,16,30,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* Column 1 */}
            <div className="space-y-8 sm:space-y-10">
              {columnOneCategories.map(renderCategory)}
            </div>

            {/* Column 2 */}
            <div className="space-y-8 sm:space-y-10">
              {columnTwoCategories.map(renderCategory)}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
