'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const features = [
  {
    icon: '📚',
    title: 'Kompletne kursy',
    description: 'Od podstaw rynku Forex, przez analizę techniczną i fundamentalną, aż po mindset, strategię Ichimoku, prop trading i zaawansowane podejście do zarządzania pozycją.'
  },
  {
    icon: '🤖',
    title: 'Bot tradingowy Ichimoku',
    description: 'Dostęp do naszego autorskiego narzędzia, które bazując na strategii Ichimoku generuje 1–1.5% dziennie. Bot jest gotowy do użycia i dostępny tylko dla członków.'
  },
  {
    icon: '📺',
    title: 'LIVE trading + sygnały',
    description: 'Codzienne sesje handlowe na żywo z ekspertami – rano i popołudniu. Otrzymujesz 3–5 precyzyjnych sygnałów dziennie na XAUUSD oraz indeksach.'
  },
  {
    icon: '🏦',
    title: 'Prop Trading i mentoring',
    description: 'Dostęp do kont proptradingowych, mentoring krok po kroku z traderem. Pomagamy przejść ścieżkę od A do Z i zaliczyć finansowy przełom.'
  },
  {
    icon: '🎁',
    title: 'Bonusy brokerskie + zamknięte forum',
    description: 'Do 150% bonusu od depozytu, dostęp do analiz, danych makro, prywatnego forum oraz 2 doświadczonych edukatorów.'
  },
  {
    icon: '📱',
    title: 'Aplikacja mobilna (wkrótce!)',
    description: 'Wkrótce startuje nasza aplikacja mobilna, która rozłoży konkurencję na łopatki. Bazuje na systemie szybkiego dostarczania informacji opartym o AI i agregację danych z oficjalnych światowych źródeł w czasie rzeczywistym.'
  }
]

const FeatureItem = ({ feature, index }: { feature: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#00BFFF]/5 transition-all duration-300"
    >
      <div className="text-3xl">{feature.icon}</div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-300">{feature.description}</p>
      </div>
    </motion.div>
  )
}

const WhatIsTP = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="what-is-tp" className="py-20 bg-[#0B0E13] relative overflow-hidden">
      {/* Tło z efektami */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#00BFFF]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEWA: GRAFIKA */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Szklany box effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-[#00BFFF]/5 to-transparent rounded-3xl p-8 border border-[#00BFFF]/20 backdrop-blur-sm">
                <Image
                  src="/images/bykzwykresem.png"
                  alt="TAKE PROFIT Program"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Neonowy glow */}
                <div className="absolute inset-0 rounded-3xl border border-[#00BFFF]/30 shadow-[0_0_40px_#00BFFF20]" />
              </div>
            </div>
          </motion.div>

          {/* PRAWA: TREŚĆ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Czym jest <span className="text-[#00BFFF]">TAKE PROFIT</span>?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To kompleksowy program mentoringowy, który przekształci Cię z początkującego tradera w profesjonalistę.
                Oferuję nie tylko wiedzę, ale także praktyczne narzędzia i wsparcie na każdym kroku.
              </p>
            </div>

            {/* Funkcje */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <a
                href="https://www.takeprofitplatform.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-10 py-5 text-lg font-bold text-[#0B0E13] bg-[#00BFFF] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#00BFFF80] border-2 border-[#00BFFF] hover:bg-[#00BFFF]/90"
              >
                Dołącz do TAKE PROFIT
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsTP 