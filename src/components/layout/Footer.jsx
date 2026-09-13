import { business } from '../../constants/business'

export default function Footer() {
  return (
    <footer className="bg-[#F6EFE5] text-[#332A24] py-10 sm:py-12 border-t border-[#E5D5C8]">
      <div className="mx-auto max-w-[1220px] px-4.5 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5D5C8]">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#8B1328]">
              {business.name}
            </p>
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#B99A5B] mt-0.5">
              {business.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold text-[#332A24]">
            <a href="#menu" className="hover:text-[#8B1328] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#8B1328] transition-colors">About Us</a>
            <a href="#contact" className="hover:text-[#8B1328] transition-colors">Contact</a>
          </nav>

          {/* Direct Phone & Email */}
          <div className="text-center md:text-right text-xs text-[#332A24]/80 space-y-1">
            <p>
              <a href={business.callUrl} className="hover:text-[#8B1328] font-bold text-[#332A24]">
                {business.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="hover:text-[#8B1328]">
                {business.email}
              </a>
            </p>
          </div>

        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#332A24]/70 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Pure vegetarian homemade catering &amp; digital menu based in Surat, Gujarat.</p>
        </div>

      </div>
    </footer>
  )
}
