import { business } from '../../constants/business'
import { Phone, MessageSquare, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-[#E3E8E3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626]">
            Contact Neeta's Kitchen
          </h2>
          <p className="text-base text-[#666666] max-w-xl mx-auto">
            Have questions regarding menus, event dates, or catering arrangements? Reach out to us directly through any of our channels.
          </p>
        </div>

        {/* 4 Equal-Height Contact Channels Grid */}
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          
          {/* 1. Phone / Call */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E3E8E3] bg-[#F7F8F4] p-7 text-left shadow-[0_2px_12px_rgba(40,122,74,0.03)] hover:border-[#287A4A]/50 transition-all h-full">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#287A4A]">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">Direct Phone</p>
                <p className="text-lg font-bold text-[#262626] mt-1">{business.phone}</p>
                <p className="text-xs text-[#666666] mt-0.5">Neeta's Kitchen</p>
              </div>
            </div>
            <a
              href={business.callUrl}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#287A4A] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#17613A] transition-all"
            >
              <Phone size={13} />
              <span>Call Now</span>
            </a>
          </div>

          {/* 2. WhatsApp */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E3E8E3] bg-[#F7F8F4] p-7 text-left shadow-[0_2px_12px_rgba(40,122,74,0.03)] hover:border-[#287A4A]/50 transition-all h-full">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#287A4A]">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">WhatsApp Chat</p>
                <p className="text-lg font-bold text-[#262626] mt-1">Chat on WhatsApp</p>
                <p className="text-xs text-[#666666] mt-0.5">Quick responses for event inquiries</p>
              </div>
            </div>
            <a
              href={business.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#287A4A] py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#17613A] transition-all"
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* 3. Email */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E3E8E3] bg-[#F7F8F4] p-7 text-left shadow-[0_2px_12px_rgba(40,122,74,0.03)] hover:border-[#287A4A]/50 transition-all h-full">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#287A4A]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">Email</p>
                <p className="text-xs font-bold text-[#262626] mt-1.5 break-all">{business.email}</p>
                <p className="text-xs text-[#666666] mt-0.5">For detailed event requests</p>
              </div>
            </div>
            <a
              href={`mailto:${business.email}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#287A4A] bg-white py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#287A4A] hover:bg-[#EAF4EC] transition-all"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
          </div>

          {/* 4. Location / Directions */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E3E8E3] bg-[#F7F8F4] p-7 text-left shadow-[0_2px_12px_rgba(40,122,74,0.03)] hover:border-[#287A4A]/50 transition-all h-full">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#287A4A]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#287A4A]">Kitchen Address</p>
                <p className="text-xs text-[#262626] font-semibold mt-1 leading-relaxed">
                  7/966, Kajipura Street, Near Katargam Darwaja, Surat – 395004, Gujarat
                </p>
              </div>
            </div>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#287A4A] bg-white py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#287A4A] hover:bg-[#EAF4EC] transition-all"
            >
              <ExternalLink size={13} />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
