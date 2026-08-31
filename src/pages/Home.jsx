import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/home/HeroSection'
import HighlightsSection from '../components/home/HighlightsSection'
import AboutStorySection from '../components/home/AboutStorySection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import MenuSection from '../components/home/MenuSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import EventDetailsSection from '../components/home/EventDetailsSection'
import ReviewInquirySection from '../components/home/ReviewInquirySection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Neeta's Kitchen | Homemade Pure Vegetarian Catering in Surat</title>
        <meta
          name="description"
          content="Authentic family-owned homemade pure vegetarian catering service in Surat. Custom menus for weddings, rituals, birthdays, and family functions up to 300 guests."
        />
      </Helmet>

      <main className="min-h-screen">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Highlights Grid */}
        <HighlightsSection />

        {/* Section 3: About / Brand Story */}
        <AboutStorySection />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Section 5: Interactive Menu */}
        <MenuSection />

        {/* Section 6: How It Works */}
        <HowItWorksSection />

        {/* Section 7: Event Details Form */}
        <EventDetailsSection />

        {/* Section 8: Inquiry Review */}
        <ReviewInquirySection />

        {/* Section 9: Contact */}
        <ContactSection />
      </main>
    </>
  )
}
