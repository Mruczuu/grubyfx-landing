'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Tablica z wynikami klientów
const results = [
  { src: '/wyniki/photo_2025-05-19_11-01-19.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-05-23_08-07-52.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-05-26_08-40-41.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-05-28_16-24-49.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-05-29_15-50-19.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-05-29_21-27-11.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-05-29_21-33-32.jpg', alt: 'Wynik tradingowy - maj 2025' },
  { src: '/wyniki/photo_2025-06-03_12-02-47.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-04_15-12-43.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-04_19-06-19.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-04_19-13-23.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-04_21-51-27.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-05_11-32-13.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-09_05-41-20.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-09_21-33-13.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-10_11-08-59.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-11_06-31-49.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-11_13-22-18.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-11_15-29-20.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-13_12-39-38.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-16_08-43-25.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-16_09-09-14.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-16_15-13-20.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-17_09-27-48.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-18_07-38-39.jpg', alt: 'Wynik tradingowy - czerwiec 2025' },
  { src: '/wyniki/photo_2025-06-19_09-15-01.jpg', alt: 'Wynik tradingowy - czerwiec 2025' }
]

const AUTO_SLIDE_INTERVAL = 4000 // ms

const Results = () => {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const stats = [
    {
      value: '1,000+',
      label: 'Aktywni uzytkownicy'
    },
    {
      value: '100%',
      label: 'Bezpłatna aplikacja'
    },
    {
      value: '11',
      label: 'Narzędzi w jednej aplikacji'
    }
  ]

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + results.length) % results.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % results.length)
  }

  return (
    <section id="wyniki" className="py-20 bg-gradient-to-b from-[#090D1F] to-[#0A1120] overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="uppercase">TAKE PROFIT</span> w liczbach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sprawdź, jak rośnie społeczność traderów korzystających z naszej aplikacji
          </p>
        </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEWA: TEKST MOTYWACYJNY */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dlaczego warto do mnie <span className="text-[#00BFFF]">dołączyć</span>?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Dzięki współpracy ze mną moi podopieczni osiągają realne wyniki. Od kilku tysięcy złotych tygodniowo po rekordowe wypłaty rzędu 9 000$. Zobacz sam.
              </p>
            </div>

            {/* Statystyki */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#00BFFF]/10 to-transparent rounded-xl border border-[#00BFFF]/20">
                <div className="text-3xl font-bold text-[#00BFFF] mb-2">9k$</div>
                <div className="text-gray-300 text-sm">Rekordowa wypłata</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#00BFFF]/10 to-transparent rounded-xl border border-[#00BFFF]/20">
                <div className="text-3xl font-bold text-[#00BFFF] mb-2">91%</div>
                <div className="text-gray-300 text-sm">Skuteczność</div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 p-8 rounded-xl text-center shadow-xl hover:border-[#33C3FF]/40 transition-all"
            >
              <div className="text-4xl font-bold text-[#33C3FF] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results 