'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Angelika',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Nigdy nie miałam tak jasno rozpisanego planu. Kacper pokazał mi krok po kroku jak osiągnąć sukces w tradingu.'
  },
  {
    name: 'Eveline',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Live\'y to złoto – nauczyłam się więcej w 2 tygodnie niż na YouTube przez rok. Polecam każdemu!'
  },
  {
    name: 'Filip',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Dzięki Kacprowi zrozumiałem, że trading to nie hazard, a systematyczna praca. Wyniki przyszły szybciej niż myślałem.'
  },
  {
    name: 'Kamil',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Profesjonalne podejście i konkretne strategie. W końcu mam plan, który działa!'
  },
  {
    name: 'Marek',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Najlepsza inwestycja w siebie. W ciągu miesiąca zarobiłem więcej niż przez cały rok pracy.'
  },
  {
    name: 'Anna',
    image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Kacper to nie tylko mentor, ale prawdziwy przyjaciel. Zawsze pomoże i doradzi.'
  },
  {
    name: 'Tomasz',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Od zera do bohatera! Dzięki TAKE PROFIT zmieniłem swoje życie finansowe.'
  }
]

const AUTO_SLIDE_INTERVAL = 5000 // ms

const HowItWorks = () => {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (testimonials.length <= 1) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, AUTO_SLIDE_INTERVAL)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="how-it-works" className="py-20 bg-[#0B0E13] relative overflow-hidden">
      {/* Tło z efektami */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFFF]/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Co mówią o mnie <span className="text-[#00BFFF]">klienci</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prawdziwe opinie od osób, które dzięki współpracy ze mną osiągnęły sukces w tradingu.
          </p>
        </motion.div>

        {/* Karuzela opinii */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-[#00BFFF]/5 to-transparent rounded-3xl p-8 border border-[#00BFFF]/20 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-8">
              {/* ZDJĘCIE PROFILOWE */}
              <div className="w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#00BFFF]/40 shadow-2xl">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Enhanced neonowy glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#00BFFF]/60 shadow-[0_0_25px_#00BFFF50] animate-pulse" />
                  <div className="absolute inset-0 rounded-full border border-[#00BFFF]/30 shadow-[0_0_15px_#00BFFF30]" />
                </div>
              </div>

              {/* CYTAT */}
              <div className="w-2/3 space-y-4">
                <div className="text-6xl text-[#00BFFF]/30 mb-4">"</div>
                <motion.p
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl text-gray-200 leading-relaxed italic"
                >
                  {testimonials[current].quote}
                </motion.p>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#00BFFF]">
                    — {testimonials[current].name}
                  </div>
                </div>
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
              {testimonials.map((_, index) => (
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
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks 