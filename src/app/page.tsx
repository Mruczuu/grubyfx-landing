import Hero from '@/components/Hero'
import AppFeatures from '@/components/AppFeatures'
import Results from '@/components/Results'
import DownloadSection from '@/components/DownloadSection'
import BrokerBanner from '@/components/BrokerBanner'
import AboutFounder from '@/components/AboutFounder'
import Testimonials from '@/components/Testimonials'
import InstagramCTA from '@/components/InstagramCTA'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AppFeatures />
      <Results />
      <DownloadSection />
      <BrokerBanner />
      <AboutFounder />
      <Testimonials />
      <InstagramCTA />
    </>
  )
}
