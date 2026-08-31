import thaliImage from '../../assets/thali.jpg'
import { business } from '../../constants/business'
import { Phone, ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="hero-section relative overflow-hidden bg-white" style={{ padding: '64px 0 72px' }}>
      <style>{`
        @media (max-width: 1023px) {
          .hero-img-wrap { height: 320px !important; min-height: 320px !important; }
        }
        @media (max-width: 639px) {
          .hero-section { padding: 52px 0 56px !important; }
          .hero-img-wrap { height: 280px !important; min-height: 280px !important; }
        }
      `}</style>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1280px' }}>
        
        {/* Main Hero Grid */}
        <div className="grid items-stretch gap-10 lg:gap-16 lg:grid-cols-[1fr_0.9fr]">
          
          {/* Left: Headline & CTAs */}
          <div className="space-y-6 text-left">
            
            {/* Green Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] border border-[#D6E8D8] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
              <span>PURE VEGETARIAN CATERING</span>
              <span className="text-[#287A4A]/50">•</span>
              <span>SURAT</span>
            </div>

            {/* Headline */}
            <div className="space-y-4 max-w-xl">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#262626] leading-[1.08]">
                Homemade Catering <br className="hidden sm:inline" />
                for Every Special <br className="hidden sm:inline" />
                Occasion
              </h1>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Freshly prepared pure vegetarian food for family functions, celebrations and gatherings across Surat.
              </p>
            </div>

            {/* Modern Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#287A4A] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(40,122,74,0.25)] hover:bg-[#17613A] transition-all"
              >
                <span>Select Your Menu</span>
                <ArrowDown size={16} />
              </a>

              <a
                href={business.callUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#287A4A] bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#287A4A] hover:bg-[#EAF4EC] transition-all"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Right: Food Photograph */}
          <div className="flex items-center">
            <div
              className="hero-img-wrap w-full overflow-hidden"
              style={{
                borderRadius: '28px',
                boxShadow: '0 8px 24px rgba(56,40,34,0.10)',
                minHeight: '340px',
                height: 'clamp(340px, 40vw, 480px)',
              }}
            >
              <img
                src={thaliImage}
                alt="Neeta's Kitchen pure vegetarian catering thali"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.7s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.015)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
