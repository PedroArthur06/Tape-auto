import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesGallery from './components/ServicesGallery'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import TestimonialsSection from './components/TestimonialsSection'
import HowItWorks from './components/HowItWorks'
import OutOfTownSection from './components/OutOfTownSection'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  return (
    <div className="font-inter bg-brand-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesGallery />
      <BeforeAfterSlider />
      <TestimonialsSection />
      <HowItWorks />
      <OutOfTownSection />
      <LocationSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App
