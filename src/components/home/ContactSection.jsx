import { business } from '../../constants/business'
import { Phone, MessageSquare, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#FBF7F0] border-t border-[#E5D5C8]">
      <div className="mx-auto max-w-[1220px] px-4.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B1328]">
            Get In Touch
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#332A24] mt-1">
            Contact Neeta's Kitchen
          </h2>
          <p className="text-sm sm:text-base text-[#332A24]/75 mt-2">
            Reach out directly for catering inquiries, questions about our menu, or to discuss arrangements for your upcoming event.
          </p>
        </div>

        {/* 4 Clean Contact Cards */}
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          
          {/* 1. Phone (Primary Action) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5D5C8] bg-[#F6EFE5]/60 p-6 text-left shadow-[0_2px_10px_rgba(100,16,30,0.02)]">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3D9DD] text-[#8B1328]">
                <Phone size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B1328]">Phone</p>
                <p className="text-base font-bold text-[#332A24] mt-0.5">{business.phoneDisplay}</p>
                <p className="text-xs text-[#332A24]/70 mt-0.5">Neeta's Kitchen</p>
              </div>
            </div>
            <a
              href={business.callUrl}
              aria-label={`Call Neeta's Kitchen at ${business.phoneDisplay}`}
              className="btn-primary mt-5 flex w-full items-center justify-center gap-2 px-4 text-xs font-semibold uppercase tracking-wider !text-white"
            >
              <Phone size={14} aria-hidden="true" className="!text-white !stroke-white" />
              <span className="!text-white">Call Now</span>
            </a>
          </div>

          {/* 2. WhatsApp (Secondary Action) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5D5C8] bg-[#F6EFE5]/60 p-6 text-left shadow-[0_2px_10px_rgba(100,16,30,0.02)]">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3D9DD] text-[#8B1328]">
                <MessageSquare size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B1328]">WhatsApp</p>
                <p className="text-base font-bold text-[#332A24] mt-0.5">Direct Chat</p>
                <p className="text-xs text-[#332A24]/70 mt-0.5">Quick replies &amp; inquiries</p>
              </div>
            </div>
            <a
              href={business.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Neeta's Kitchen on WhatsApp"
              className="btn-secondary mt-5 flex w-full items-center justify-center gap-2 px-4 text-xs font-semibold uppercase tracking-wider !text-[#8B1328]"
            >
              <MessageSquare size={14} aria-hidden="true" className="!text-[#8B1328] !stroke-[#8B1328]" />
              <span className="!text-[#8B1328]">WhatsApp</span>
            </a>
          </div>

          {/* 3. Email (Secondary Action) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5D5C8] bg-[#F6EFE5]/60 p-6 text-left shadow-[0_2px_10px_rgba(100,16,30,0.02)]">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3D9DD] text-[#8B1328]">
                <Mail size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B1328]">Email</p>
                <p className="text-xs font-bold text-[#332A24] mt-1 break-all">{business.email}</p>
                <p className="text-xs text-[#332A24]/70 mt-0.5">Inquiries &amp; quotes</p>
              </div>
            </div>
            <a
              href={`mailto:${business.email}`}
              aria-label={`Email Neeta's Kitchen at ${business.email}`}
              className="btn-secondary mt-5 flex w-full items-center justify-center gap-2 px-4 text-xs font-semibold uppercase tracking-wider !text-[#8B1328]"
            >
              <Mail size={14} aria-hidden="true" className="!text-[#8B1328] !stroke-[#8B1328]" />
              <span className="!text-[#8B1328]">Email</span>
            </a>
          </div>

          {/* 4. Location / Directions (Secondary Action) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E5D5C8] bg-[#F6EFE5]/60 p-6 text-left shadow-[0_2px_10px_rgba(100,16,30,0.02)]">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3D9DD] text-[#8B1328]">
                <MapPin size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B1328]">Kitchen Address</p>
                <p className="text-xs text-[#332A24] font-semibold mt-1 leading-relaxed">
                  {business.address}
                </p>
              </div>
            </div>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Neeta's Kitchen on Google Maps"
              className="btn-secondary mt-5 flex w-full items-center justify-center gap-2 px-4 text-xs font-semibold uppercase tracking-wider !text-[#8B1328]"
            >
              <ExternalLink size={14} aria-hidden="true" className="!text-[#8B1328] !stroke-[#8B1328]" />
              <span className="!text-[#8B1328]">Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
