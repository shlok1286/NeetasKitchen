import { useState, useEffect } from 'react'
import { Menu as MenuIcon, X, Phone } from 'lucide-react'
import { business } from '../../constants/business'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Event Details', href: '#event-details' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-[#E3E8E3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Wordmark (No icon/NK logo) */}
          <a href="#home" className="flex flex-col text-left group">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#262626] group-hover:text-[#287A4A] transition-colors leading-none">
              {business.name}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#287A4A] mt-1">
              {business.tagline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#666666] hover:text-[#287A4A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Call Now */}
          <div className="flex items-center gap-3">
            <a
              href={business.callUrl}
              className="inline-flex items-center gap-2 rounded-full bg-[#287A4A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#17613A] transition-all"
            >
              <Phone size={13} />
              <span>Call Now</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E3E8E3] bg-white text-[#262626] hover:border-[#287A4A] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-5 pt-2 border-t border-[#E3E8E3] animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-base font-semibold text-[#262626] hover:bg-[#EAF4EC] hover:text-[#287A4A] transition-colors text-left"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E3E8E3]">
                <a
                  href={business.callUrl}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#287A4A] py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#17613A]"
                >
                  <Phone size={14} />
                  <span>Call Now ({business.phoneDisplay})</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
