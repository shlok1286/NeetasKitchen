import { useState } from 'react'
import { useMenu, formatReadableDate, isDateValid } from '../../context/MenuContext'
import { COMPLIMENTARY } from '../../constants/menuData'
import { business } from '../../constants/business'
import { MessageSquare, AlertCircle, Edit3 } from 'lucide-react'

export default function ReviewInquirySection() {
  const {
    state,
    getSelectedStarters,
    getSelectedCompleteDishes,
    getSelectedShaaks,
    getSelectedBread,
    getSelectedDal,
    getSelectedRice,
    getSelectedSweet,
    generateWhatsAppUrl,
  } = useMenu()

  const {
    name,
    phone,
    eventType,
    customEventType,
    date,
    guestCount,
    location,
    serviceType,
    notes,
  } = state.eventDetails

  const [dateError, setDateError] = useState(false)

  const selectedStarters = getSelectedStarters()
  const selectedComplete = getSelectedCompleteDishes()
  const selectedShaaks = getSelectedShaaks()
  const selectedBread = getSelectedBread()
  const selectedDal = getSelectedDal()
  const selectedRice = getSelectedRice()
  const selectedSweet = getSelectedSweet()

  const actualEventType = eventType === 'Other' ? (customEventType || 'Other Function') : eventType
  const formattedDate = date ? formatReadableDate(date) : ''
  const hasValidDate = isDateValid(date)

  const handleWhatsAppClick = (e) => {
    if (!hasValidDate) {
      e.preventDefault()
      setDateError(true)
      setTimeout(() => setDateError(false), 4000)
      const el = document.getElementById('event-details')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const whatsappUrl = hasValidDate ? generateWhatsAppUrl() : '#'

  return (
    <section id="review-inquiry" className="py-16 md:py-20 bg-[#F7F8F4] border-t border-[#E3E8E3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
            <span>Final Step</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626]">
            Review Your Catering Inquiry
          </h2>
          <p className="text-base text-[#666666] max-w-xl mx-auto">
            Review your catering selections and function details below before sending your inquiry directly on WhatsApp.
          </p>
        </div>

        {/* Date Validation Alert if triggered */}
        {dateError && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl border-2 border-[#287A4A] bg-[#EAF4EC] p-4 text-sm font-bold text-[#17613A] animate-bounce text-left">
            <AlertCircle size={20} className="text-[#287A4A] shrink-0" aria-hidden="true" />
            <span>Please select today or a future date in the Event Details section before sending on WhatsApp.</span>
          </div>
        )}

        {/* Consolidated Review Paper Card */}
        <div className="rounded-3xl border border-[#E3E8E3] bg-white p-8 sm:p-12 shadow-[0_4px_24px_rgba(40,122,74,0.04)] text-left space-y-9">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E3E8E3] pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#287A4A]">
                Catering Inquiry Summary
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#262626] mt-1">
                {business.name}
              </h3>
            </div>
            <a
              href="#menu"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#287A4A] hover:text-[#17613A] transition-colors"
            >
              <Edit3 size={14} aria-hidden="true" />
              <span>Modify Menu</span>
            </a>
          </div>

          {/* Customer & Event Details Grid */}
          <div className="grid gap-6 sm:grid-cols-2 rounded-2xl bg-[#F7F8F4] p-6 border border-[#E3E8E3]">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                Customer Details
              </h4>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Name:</strong> {name || <span className="text-[#666666]/50 italic">Not provided</span>}
              </p>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Mobile:</strong> {phone || <span className="text-[#666666]/50 italic">Not provided</span>}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                Event Details
              </h4>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Occasion:</strong> {actualEventType}
              </p>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Event Date:</strong> {formattedDate || <span className="text-[#666666]/50 italic">Not specified</span>}
              </p>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Estimated Guests:</strong> {guestCount || <span className="text-[#666666]/50 italic">Not specified</span>}
              </p>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Location:</strong> {location || 'Surat'}
              </p>
              <p className="text-sm text-[#262626]">
                <strong className="text-[#666666]">Service:</strong> {serviceType === 'pickup' ? 'Self Pickup from Kitchen' : 'Venue Delivery in Surat'}
              </p>
            </div>
          </div>

          {/* Selected Menu Items Breakdown */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A] border-b border-[#E3E8E3] pb-2">
              Selected Menu Dishes
            </h4>

            <div className="space-y-4 text-sm text-[#262626]">
              
              {/* Starters */}
              <div>
                <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block mb-1">
                  Starters:
                </span>
                {selectedStarters.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedStarters.map((st) => (
                      <span key={st.id} className="rounded-lg bg-[#EAF4EC] border border-[#D6E8D8] px-3 py-1.5 text-sm font-bold text-[#262626]">
                        {st.name} <span className="font-gujarati text-xs text-[#287A4A]">({st.gujaratiName})</span>
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-[#666666]/60 italic">No starters chosen</span>
                )}
              </div>

              {/* Complete Dishes */}
              <div>
                <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block mb-1">
                  Complete Dishes:
                </span>
                {selectedComplete.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedComplete.map((cd) => (
                      <span key={cd.id} className="rounded-lg bg-[#EAF4EC] border border-[#D6E8D8] px-3 py-1.5 text-sm font-bold text-[#262626]">
                        {cd.name} <span className="font-gujarati text-xs text-[#287A4A]">({cd.gujaratiName})</span>
                        {cd.id === 'pav_bhaji' && state.amulButterPavBhaji && (
                          <span className="text-[#287A4A] ml-1.5 font-bold">[Amul Butter]</span>
                        )}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-[#666666]/60 italic">None selected</span>
                )}
              </div>

              {/* Shaak */}
              <div>
                <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block mb-1">
                  Shaak / Curries:
                </span>
                {selectedShaaks.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedShaaks.map((sh) => (
                      <span key={sh.id} className="rounded-lg bg-[#EAF4EC] border border-[#D6E8D8] px-3 py-1.5 text-sm font-bold text-[#262626]">
                        {sh.name} <span className="font-gujarati text-xs text-[#287A4A]">({sh.gujaratiName})</span>
                        {sh.id === 'paneer_butter_masala' && state.amulButterPaneerButterMasala && (
                          <span className="text-[#287A4A] ml-1.5 font-bold">[Amul Butter]</span>
                        )}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs text-[#666666]/60 italic">No shaak chosen</span>
                )}
              </div>

              {/* Bread, Dal, Rice, Sweet */}
              <div className="grid gap-3 sm:grid-cols-2 pt-2 border-t border-[#E3E8E3]">
                <div>
                  <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block">Bread:</span>
                  <span className="text-sm font-bold text-[#262626]">
                    {selectedBread ? (
                      <>
                        {selectedBread.name} <span className="font-gujarati text-xs text-[#287A4A]">({selectedBread.gujaratiName})</span>
                      </>
                    ) : (
                      <span className="text-xs text-[#666666]/60 italic">None</span>
                    )}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block">Dal:</span>
                  <span className="text-sm font-bold text-[#262626]">
                    {selectedDal ? (
                      <>
                        {selectedDal.name} <span className="font-gujarati text-xs text-[#287A4A]">({selectedDal.gujaratiName})</span>
                      </>
                    ) : (
                      <span className="text-xs text-[#666666]/60 italic">None</span>
                    )}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block">Rice:</span>
                  <span className="text-sm font-bold text-[#262626]">
                    {selectedRice ? (
                      <>
                        {selectedRice.name} <span className="font-gujarati text-xs text-[#287A4A]">({selectedRice.gujaratiName})</span>
                      </>
                    ) : (
                      <span className="text-xs text-[#666666]/60 italic">None</span>
                    )}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block">Sweet:</span>
                  <span className="text-sm font-bold text-[#262626]">
                    {selectedSweet ? (
                      <>
                        {selectedSweet.name} <span className="font-gujarati text-xs text-[#287A4A]">({selectedSweet.gujaratiName})</span>
                      </>
                    ) : (
                      <span className="text-xs text-[#666666]/60 italic">None</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Complimentary */}
              <div className="pt-2 border-t border-[#E3E8E3]">
                <span className="font-bold text-[#287A4A] text-xs uppercase tracking-wider block mb-1">
                  Complimentary (Automatically Included):
                </span>
                <div className="flex flex-wrap gap-2">
                  {COMPLIMENTARY.map((c) => (
                    <span key={c.id} className="rounded-lg bg-[#EAF4EC] border border-[#D6E8D8] px-3 py-1 text-xs font-bold text-[#262626]">
                      {c.name} <span className="font-gujarati text-[#287A4A]">({c.gujaratiName})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {notes && notes.trim() !== '' && (
                <div className="pt-2 border-t border-[#E3E8E3]">
                  <span className="font-bold text-[#666666] text-xs uppercase tracking-wider block">
                    Special Notes:
                  </span>
                  <p className="text-xs text-[#262626] mt-1 bg-[#F7F8F4] p-3 rounded-lg border border-[#E3E8E3]">
                    {notes}
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* WhatsApp Action Button */}
          <div className="pt-6 border-t border-[#E3E8E3] space-y-4 text-center">
            
            <a
              href={whatsappUrl}
              target={hasValidDate ? '_blank' : undefined}
              rel={hasValidDate ? 'noopener noreferrer' : undefined}
              onClick={handleWhatsAppClick}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#287A4A] px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(40,122,74,0.25)] hover:bg-[#17613A] transition-all cursor-pointer"
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>Send Inquiry on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-[#666666]">
              <AlertCircle size={14} className="text-[#287A4A]" aria-hidden="true" />
              <span>This opens WhatsApp with your pre-filled inquiry. Please press Send in WhatsApp.</span>
            </div>

            <p className="text-xs text-[#666666]/70 max-w-md mx-auto">
              This is an inquiry to check date availability and obtain a personalized quotation. It is not an automatic booking confirmation.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
