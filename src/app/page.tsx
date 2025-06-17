import Hero from '@/components/Hero'
import History from '@/components/History'
import WhatIsGC from '@/components/WhatIsGC'
import Results from '@/components/Results'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Requirements from '@/components/Requirements'
import ContactForm from '@/components/ContactForm'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <History />
      <WhatIsGC />
      <Results />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <Requirements />
      <ContactForm />
    </>
  )
}
