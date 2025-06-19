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

  useEffect(() => {
    if (results.length <= 1) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % results.length)
    }, AUTO_SLIDE_INTERVAL)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

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
    <section id="results" className="py-20 bg-[#0B0E13] relative overflow-hidden">
      {/* Tło z efektami */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFFF]/5 to-transparent" />

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="/wspolpraca"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold text-[#0B0E13] bg-[#00BFFF] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_#00BFFF60] border-2 border-[#00BFFF]"
              >
                Wypełnij formularz zgłoszeniowy
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

          {/* PRAWA: SLIDER WYNIKÓW */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Elegancki box ze sliderem */}
              <div className="relative bg-gradient-to-br from-[#00BFFF]/5 to-transparent rounded-3xl p-10 border border-[#00BFFF]/20 backdrop-blur-sm shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {results.map((result, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Image
                          src={result.src}
                          alt={result.alt}
                          width={600}
                          height={500}
                          className="w-full h-96 md:h-[28rem] lg:h-[32rem] object-contain object-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kontrolki */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button
                    onClick={goToPrevious}
                    className="bg-[#00BFFF]/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#00BFFF]/40 transition-all duration-300 border border-[#00BFFF]/30"
                  >
                    ←
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={goToNext}
                    className="bg-[#00BFFF]/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#00BFFF]/40 transition-all duration-300 border border-[#00BFFF]/30"
                  >
                    →
                  </button>
                </div>

                {/* Wskaźniki */}
                <div className="flex justify-center mt-8 space-x-2">
                  {results.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-[#00BFFF]' : 'bg-[#00BFFF]/30'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Neonowy glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#00BFFF]/30 shadow-[0_0_40px_#00BFFF20] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Results 