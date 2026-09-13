import { Helmet } from 'react-helmet-async'
import MenuSection from '../components/home/MenuSection'
import OccasionsSection from '../components/home/OccasionsSection'
import AboutStorySection from '../components/home/AboutStorySection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Neeta's Kitchen | Pure Vegetarian Catering</title>
        <meta
          name="description"
          content="Authentic pure vegetarian Gujarati and Punjabi digital catering menu for Neeta's Kitchen, Surat. Freshly prepared homemade food for up to 300 guests."
        />
      </Helmet>

      <main className="min-h-screen">
        {/* 1. Menu (First Content) */}
        <MenuSection />

        {/* 2. Catering For Your Occasion */}
        <OccasionsSection />

        {/* 3. About Neeta's Kitchen */}
        <AboutStorySection />

        {/* 4. Contact Neeta's Kitchen & Delivery Info */}
        <ContactSection />
      </main>
    </>
  )
}
