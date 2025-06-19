'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  {
    icon: '🎯',
    title: 'Skuteczna strategia',
    description: '5 lat doświadczenia, setki transakcji i podejście, które działa w każdych warunkach rynkowych. Tu nie ma zgadywania – są zasady.'
  },
  {
    icon: '💰',
    title: 'Prawdziwe wyniki',
    description: 'Moi podopieczni zarabiają od kilkuset złotych tygodniowo do rekordowych 9 000$ miesięcznie. Wyniki mówią same za siebie.'
  },
  {
    icon: '📈',
    title: 'Pełne wsparcie',
    description: 'LIVE trading codziennie, analizy, strategia Ichimoku, mentoring 1:1. Uczysz się od ludzi, którzy naprawdę grają.'
  },
  {
    icon: '🤝',
    title: 'Silna społeczność',
    description: 'Zamknięta grupa traderów, wymiana doświadczeń, pomoc i rozwój. Tutaj rośniesz szybciej, bo nie jesteś sam.'
  }
]

const ReasonCard = ({ reason, index }: { reason: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative bg-gradient-to-br from-[#00BFFF]/10 to-transparent rounded-2xl p-8 border border-[#00BFFF]/20 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00BFFF]/20 hover:-translate-y-2 hover:border-[#00BFFF]/40 h-full flex flex-col justify-between">
        <div className="text-center space-y-4">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {reason.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {reason.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {reason.description}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-[#0B0E13] relative overflow-hidden">
      {/* Tło z efektami */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFFF]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dlaczego warto do mnie <span className="text-[#00BFFF]">dołączyć</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nie jestem kolejnym "guru" z internetu. Oferuję sprawdzoną metodę, realne wsparcie i konkretne wyniki.
          </p>
        </motion.div>

        {/* Grid z powodami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="/wspolpraca"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#0B0E13] bg-[#00BFFF] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#00BFFF80] border-2 border-[#00BFFF] hover:bg-[#00BFFF]/90"
          >
            Dołącz teraz
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs 