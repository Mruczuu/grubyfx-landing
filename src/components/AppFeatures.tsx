'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const AppFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2) // Tablet: 2 cards
      } else {
        setItemsPerPage(4) // Desktop: 4 cards
      }
      setCurrentPage(0) // Reset to first page on resize
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const features = [
    {
      icon: '📅',
      title: 'Kalendarz Makroekonomiczny',
      description: 'Śledź wszystkie ważne wydarzenia ekonomiczne w czasie rzeczywistym.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✍️',
      title: 'Codzienne Wpisy',
      description: 'Najważniejsze analizy i komentarze rynkowe przygotowane specjalnie dla Ciebie.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📰',
      title: 'Take Profit Blog',
      description: 'Aktualne sytuacje rynkowe opisywane na żywo. Głębokie analizy i komentarze.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '📊',
      title: 'Darmowe Sygnały',
      description: 'Profesjonalne sygnały tradingowe całkowicie za darmo.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📰',
      title: 'Newsroom',
      description: 'Wszystkie dane rynkowe na bieżąco w jednym miejscu.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '📝',
      title: 'Trading Journal',
      description: 'Śledź swoje transakcje, analizuj wyniki i ucz się na błędach.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🏦',
      title: 'FedWatch',
      description: 'Monitoruj wyceny przyszłości obniżek stóp procentowych.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🧮',
      title: 'Kalkulator Pozycji',
      description: 'Obliczaj optymalną wielkość pozycji zgodnie z zarządzaniem ryzykiem.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: '💬',
      title: 'Community',
      description: 'Czaty społecznościowe z innymi traderami. Wymieniaj się doświadczeniami.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: '🎯',
      title: 'Quizy Edukacyjne',
      description: 'Ucz się w interaktywny sposób. Testuj swoją wiedzę o tradingu.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: '🎓',
      title: 'Kursy Edukacyjne',
      description: 'Od podstaw aż po zaawansowane strategie. Kompleksowa edukacja.',
      color: 'from-amber-500 to-yellow-500'
    }
  ]

  const totalPages = Math.ceil(features.length / itemsPerPage)
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentFeatures = features.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section id="funkcje" className="py-20 bg-gradient-to-b from-[#090D1F] to-[#0A1120] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#33C3FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#33C3FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kompletny zestaw narzędzi tradera. Wszystko w jednej aplikacji, całkowicie bezpłatnie.
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={prevPage}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#33C3FF]/20 hover:bg-[#33C3FF]/40 border border-[#33C3FF]/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={nextPage}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#33C3FF]/20 hover:bg-[#33C3FF]/40 border border-[#33C3FF]/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards grid */}
          <div className="px-8 md:px-16 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {currentFeatures.map((feature, index) => (
                  <div
                    key={`${currentPage}-${index}`}
                    className="group"
                  >
                    <div className="h-full bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 rounded-2xl p-6 hover:border-[#33C3FF]/40 transition-all duration-300 hover:shadow-[0_0_30px_#33C3FF20] hover:-translate-y-1">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#33C3FF] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar + counter */}
          <div className="flex flex-col items-center gap-3 mt-6">
            <div className="text-gray-400 text-sm">
              {currentPage + 1} / {totalPages}
            </div>
            <div className="w-32 h-1 bg-[#33C3FF]/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#33C3FF] rounded-full"
                animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppFeatures
