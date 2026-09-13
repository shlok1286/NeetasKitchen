import { Helmet } from 'react-helmet-async'
import MenuSection from '../components/home/MenuSection'
import AboutStorySection from '../components/home/AboutStorySection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Neeta's Kitchen | Pure Vegetarian Catering</title>
        <meta
          name="description"
          content="Authentic pure vegetarian Gujarati and Punjabi digital menu for Neeta's Kitchen, Surat. Freshly prepared homemade food."
        />
      </Helmet>

      <main className="min-h-screen">
        {/* Section 1: Menu */}
        <MenuSection />

        {/* Section 2: About Us */}
        <AboutStorySection />

        {/* Section 3: Contact Us */}
        <ContactSection />
      </main>
    </>
  )
}
