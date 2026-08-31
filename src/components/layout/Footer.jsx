import { business } from '../../constants/business'

export default function Footer() {
  return (
    <footer className="bg-[#17613A] text-white py-12 border-t border-[#1E633B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#287A4A]">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {business.name}
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6E8D8] mt-1">
              {business.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold text-[#EAF4EC]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#event-details" className="hover:text-white transition-colors">Event Details</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Direct Phone & Email */}
          <div className="text-center md:text-right text-xs text-[#EAF4EC] space-y-1">
            <p><a href={business.callUrl} className="hover:text-white font-semibold">{business.phone}</a></p>
            <p><a href={`mailto:${business.email}`} className="hover:text-white">{business.email}</a></p>
          </div>

        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#EAF4EC]/80 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Pure vegetarian homemade catering service based in Surat, Gujarat.</p>
        </div>

      </div>
    </footer>
  )
}
