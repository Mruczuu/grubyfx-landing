'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  // Auto-slide effect
  useEffect(() => {
    if (inView) {
      timeoutRef.current = setInterval(() => {
        goToNext()
      }, AUTO_SLIDE_INTERVAL)
    }

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    }
  }, [inView])

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
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

        {/* Gallery section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#090D1F] border border-[#33C3FF]/20">
              <Image
                src={results[current].src}
                alt={results[current].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#33C3FF]/20 hover:bg-[#33C3FF]/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Poprzednie zdjęcie"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#33C3FF]/20 hover:bg-[#33C3FF]/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Następne zdjęcie"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-[#33C3FF] w-8' : 'bg-[#33C3FF]/30'
                  }`}
                  aria-label={`Przejdź do slajdu ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
