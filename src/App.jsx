import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesGallery from './components/ServicesGallery'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import HowItWorks from './components/HowItWorks'
import OutOfTownSection from './components/OutOfTownSection'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  return (
    <div className="font-inter bg-brand-black min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <ServicesGallery />
      <BeforeAfterSlider />
      <HowItWorks />
      <OutOfTownSection />
      <LocationSection />
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App
