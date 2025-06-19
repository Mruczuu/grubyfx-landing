import Hero from '@/components/Hero'
import History from '@/components/History'
import WhatIsTP from '@/components/WhatIsTP'
import Results from '@/components/Results'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import Requirements from '@/components/Requirements'
import CallToAction from '@/components/CallToAction'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <History />
      <WhatIsTP />
      <Results />
      <HowItWorks />
      <WhyUs />
      <Requirements />
      <CallToAction />
    </>
  )
}
