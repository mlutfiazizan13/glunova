import './App.css'
import { CTASection } from './components/common/CTASection'
import FeaturesGrid from './components/common/FeaturesGrid'
import FeatureShowcase from './components/common/FeatureShowcase'
import Footer from './components/common/Footer'
import { Header } from './components/common/Header'
import Hero from './components/common/Hero'
import Testimonials from './components/common/Testimonials'

function App() {

  return (
    <div id='home' className="bg-white relative min-h-screen overflow-x-hidden">
      <Header />

      <Hero />

      <FeaturesGrid />

      <FeatureShowcase
        title="Track your progress, "
        titleHighlight="stay motivated"
        description="See your daily goals and health insights in one glance. From glucose checks to activities, Glunova shows your progress clearly with easy-to-read charts, helping you stay on track every day."
        imageType="progress"
        layout="left"
      />

      <FeatureShowcase
        title="Sync your glucose meter, "
        titleHighlight="skip the hassle"
        description="Connect Glunova with your Bluetooth glucose meter and let your readings log automatically. No more manual input — just check as usual, and your data is safely stored in the app."
        imageType="sync"
        layout="right"
      />

      <Testimonials />

      <CTASection />
      
      <Footer />
    </div>
  )
}

export default App
