import { useMenu, getTodayDateString, isDateValid } from '../../context/MenuContext'
import { EVENT_TYPES } from '../../constants/menuData'
import { business } from '../../constants/business'
import { Truck, Clock, ArrowDown, AlertCircle } from 'lucide-react'

export default function EventDetailsSection() {
  const { state, updateEventDetails, dateValidationAlert } = useMenu()
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

  const minDate = getTodayDateString()
  const hasValidDate = isDateValid(date)

  return (
    <section id="event-details" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
            <span>Function Logistics</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626]">
            Event & Customer Details
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Provide the details for your event to help us verify date availability and prepare your personalized quotation.
          </p>
        </div>

        {/* Date Validation Alert */}
        {dateValidationAlert && (
          <div className="mb-8 flex items-center gap-3 rounded-2xl border-2 border-[#287A4A] bg-[#EAF4EC] p-4 text-sm font-bold text-[#17613A] animate-bounce text-left">
            <AlertCircle size={20} className="text-[#287A4A] shrink-0" />
            <span>Please select today or a future date.</span>
          </div>
        )}

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
          
          {/* Left Column: Grouped Form */}
          <div className="rounded-3xl border border-[#E3E8E3] bg-[#F7F8F4] p-8 sm:p-10 shadow-[0_4px_24px_rgba(40,122,74,0.04)] text-left space-y-9">
            
            {/* GROUP 1: YOUR DETAILS */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                  Your Details
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    placeholder="e.g. Ramesh Patel"
                    value={name}
                    onChange={(e) => updateEventDetails({ name: e.target.value })}
                    className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm text-[#262626] placeholder:text-[#666666]/40 focus:border-[#287A4A] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="customer-phone"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => updateEventDetails({ phone: e.target.value })}
                    className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm text-[#262626] placeholder:text-[#666666]/40 focus:border-[#287A4A] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* GROUP 2: YOUR FUNCTION */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                  Your Function
                </h3>
              </div>
              
              {/* Event Type Grid */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-2">
                  Event Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EVENT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateEventDetails({ eventType: type })}
                      className={`rounded-lg border px-3 py-2 text-xs font-bold transition-all text-left ${
                        eventType === type
                          ? 'border-[#287A4A] bg-[#287A4A] text-white shadow-sm'
                          : 'border-[#E3E8E3] bg-white text-[#262626] hover:border-[#287A4A]/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {eventType === 'Other' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Please specify your event type..."
                      value={customEventType}
                      onChange={(e) => updateEventDetails({ customEventType: e.target.value })}
                      className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-2.5 text-sm text-[#262626] placeholder:text-[#666666]/40 focus:border-[#287A4A] focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Date & Guests */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="event-date" className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1.5">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    min={minDate}
                    value={date}
                    onChange={(e) => updateEventDetails({ date: e.target.value })}
                    className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm text-[#262626] focus:border-[#287A4A] focus:outline-none"
                  />
                  {date && !hasValidDate && (
                    <p className="text-[11px] text-[#287A4A] mt-1 font-bold">
                      Please select today or a future date.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="event-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1.5">
                    Guest Count * (Up to 300)
                  </label>
                  <input
                    type="text"
                    id="event-guests"
                    placeholder="e.g. 50, 100, 200..."
                    value={guestCount}
                    onChange={(e) => updateEventDetails({ guestCount: e.target.value })}
                    className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm text-[#262626] placeholder:text-[#666666]/40 focus:border-[#287A4A] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* GROUP 3: LOCATION & SERVICE */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                  Location & Service
                </h3>
              </div>

              <div>
                <label htmlFor="event-location" className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1.5">
                  Event Location in Surat *
                </label>
                <input
                  type="text"
                  id="event-location"
                  placeholder="e.g. Adajan, Vesu, Pal, Katargam, Varachha..."
                  value={location}
                  onChange={(e) => updateEventDetails({ location: e.target.value })}
                  className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm text-[#262626] placeholder:text-[#666666]/40 focus:border-[#287A4A] focus:outline-none"
                />
              </div>

              {/* Service Option */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-2">
                  Delivery / Self Pickup *
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => updateEventDetails({ serviceType: 'delivery' })}
                    className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      serviceType === 'delivery'
                        ? 'border-[#287A4A] bg-[#EAF4EC] shadow-sm'
                        : 'border-[#E3E8E3] bg-white hover:border-[#287A4A]/40'
                    }`}
                  >
                    <Truck className={`mt-0.5 ${serviceType === 'delivery' ? 'text-[#287A4A]' : 'text-[#666666]'}`} size={18} />
                    <div>
                      <p className="text-sm font-bold text-[#262626]">Venue Delivery</p>
                      <p className="text-xs text-[#666666]">
                        Delivered fresh to your venue in Surat
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => updateEventDetails({ serviceType: 'pickup' })}
                    className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      serviceType === 'pickup'
                        ? 'border-[#287A4A] bg-[#EAF4EC] shadow-sm'
                        : 'border-[#E3E8E3] bg-white hover:border-[#287A4A]/40'
                    }`}
                  >
                    <div className={`mt-0.5 ${serviceType === 'pickup' ? 'text-[#287A4A]' : 'text-[#666666]'}`}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#262626]">Self Pickup</p>
                      <p className="text-xs text-[#666666]">
                        Collect directly from our kitchen
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* GROUP 4: ADDITIONAL NOTES */}
            <div className="space-y-4">
              <div className="border-b border-[#E3E8E3] pb-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                  Special Requirements
                </h3>
              </div>

              <div>
                <label htmlFor="event-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#666666] mb-1.5">
                  Notes (Optional)
                </label>
                <textarea
                  id="event-notes"
                  rows={3}
                  placeholder="e.g. Jain food requirements, timings, specific spice preferences..."
                  value={notes}
                  onChange={(e) => updateEventDetails({ notes: e.target.value })}
                  className="w-full rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm text-[#262626] placeholder:text-[#666666]/40 focus:border-[#287A4A] focus:outline-none"
                />
              </div>
            </div>

            {/* Advance to Review CTA */}
            <div className="pt-2">
              <a
                href="#review-inquiry"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#287A4A] py-4 px-8 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#17613A] transition-all"
              >
                <span>Review Your Catering Inquiry</span>
                <ArrowDown size={16} />
              </a>
            </div>

          </div>

          {/* Right Column: Policy Cards */}
          <div className="space-y-6 text-left">
            
            {/* Delivery Policy Card */}
            <div className="rounded-3xl border border-[#E3E8E3] bg-[#F7F8F4] p-8 shadow-[0_2px_16px_rgba(40,122,74,0.03)] space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                <span>Delivery Info</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-[#262626]">
                Surat Service Area
              </h4>
              
              <ul className="space-y-3 text-sm text-[#666666] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span>We currently serve Surat and within Surat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span><strong>For 50+ guests:</strong> Delivery is free.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span><strong>For fewer than 50 guests:</strong> Delivery charges depend on the service area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span><strong>Self pickup is also available</strong> directly from our kitchen.</span>
                </li>
              </ul>

              <div className="rounded-2xl bg-white p-4 border border-[#E3E8E3] text-xs text-[#262626]">
                <p className="font-bold text-[#287A4A] mb-1 uppercase tracking-wider text-[11px]">
                  Pickup Address:
                </p>
                <p className="leading-relaxed text-[#666666]">
                  {business.address}
                </p>
              </div>
            </div>

            {/* Order Notice Card */}
            <div className="rounded-3xl border border-[#E3E8E3] bg-[#F7F8F4] p-8 shadow-[0_2px_16px_rgba(40,122,74,0.03)] space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
                <span>Booking Notice</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-[#262626]">
                Order Information
              </h4>

              <ul className="space-y-3 text-sm text-[#666666] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span>Please preferably contact us around <strong>7 days before your event</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span>Orders are accepted according to date availability and our daily kitchen capacity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span>During busy festival and wedding seasons, availability may be limited.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#287A4A] font-bold">•</span>
                  <span>We accept only a limited number of orders per day to maintain authentic homemade quality.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
