import { useState } from 'react'
import { Menu as MenuIcon, X, Phone } from 'lucide-react'
import { business } from '../../constants/business'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#FBF7F0]/95 backdrop-blur-md border-b border-[#E5D5C8]">
      <div className="site-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Wordmark */}
          <a href="#menu" className="flex flex-col text-left group">
            <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#8B1328] group-hover:text-[#64101E] transition-colors leading-none">
              {business.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#B99A5B] mt-1">
              {business.tagline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-[#332A24] hover:text-[#8B1328] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Call Now */}
          <div className="flex items-center gap-3">
            <a
              href={business.callUrl}
              className="btn-primary inline-flex items-center gap-2 px-5 text-xs font-semibold uppercase tracking-wider !text-white !h-10"
            >
              <Phone size={13} aria-hidden="true" className="!text-white !stroke-white" />
              <span className="!text-white">Call Now</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5D5C8] bg-[#F6EFE5] text-[#332A24] hover:border-[#8B1328] hover:text-[#8B1328] focus:outline-none transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <MenuIcon size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden pb-4 pt-2 border-t border-[#E5D5C8]">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-[#332A24] hover:bg-[#F6EFE5] hover:text-[#8B1328] transition-colors text-left"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E5D5C8]">
                <a
                  href={business.callUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary flex items-center justify-center gap-2 w-full text-xs font-semibold uppercase tracking-wider !text-white !h-11"
                >
                  <Phone size={14} aria-hidden="true" className="!text-white !stroke-white" />
                  <span className="!text-white">Call Now ({business.phoneDisplay})</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
