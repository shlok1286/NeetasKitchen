export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Select Your Menu',
      desc: 'Browse our appetizers, main curries, dal, and sweets to curate your ideal menu.',
    },
    {
      num: '02',
      title: 'Share Event Details',
      desc: 'Enter your event type, scheduled date, guest count, and Surat venue location.',
    },
    {
      num: '03',
      title: 'Review Your Inquiry',
      desc: 'Double check your full dish selections and logistics on our consolidated summary.',
    },
    {
      num: '04',
      title: 'Send on WhatsApp',
      desc: 'Send your customized inquiry directly to our kitchen with a single tap on WhatsApp.',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-[#F7F8F4] border-y border-[#E3E8E3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EC] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#287A4A]">
            <span>Simple Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#262626]">
            How It Works
          </h2>
          <p className="text-base text-[#666666] max-w-xl mx-auto">
            A seamless four-step flow to plan and request your personalized catering quotation.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
          {steps.map((st, idx) => (
            <li key={idx} className="relative flex flex-col text-left space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-extrabold text-[#287A4A]">
                  {st.num}
                </span>
                <div className="h-0.5 flex-1 bg-[#D6E8D8] ml-4 hidden lg:block" aria-hidden="true" />
              </div>

              <h3 className="font-display text-xl font-bold text-[#262626]">
                {st.title}
              </h3>

              <p className="text-sm text-[#666666] leading-relaxed">
                {st.desc}
              </p>

            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
