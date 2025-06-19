'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const requirements = [
  {
    icon: '💻',
    title: 'Laptop lub telefon',
    description: 'Wystarczy urządzenie z przeglądarką i dostępem do internetu – możesz zacząć z każdego miejsca.'
  },
  {
    icon: '🧠',
    title: 'Otwartą głowę',
    description: 'Nie musisz być ekspertem. Nauczę Cię wszystkiego od zera, krok po kroku.'
  },
  {
    icon: '🌐',
    title: 'Połączenie z internetem',
    description: 'Stabilny internet wystarczy, żebyś mógł działać z dowolnego miejsca na świecie.'
  },
  {
    icon: '⏰',
    title: '1 godzina dziennie',
    description: 'Wystarczy 60 minut dziennie, by opanować strategię, analizować rynki i zarabiać.'
  },
  {
    icon: '🔥',
    title: 'Chęć zmiany życia',
    description: 'Jeśli jesteś gotów zainwestować w siebie, ta decyzja zmieni wszystko.'
  }
]

const RequirementCard = ({ requirement, index }: { requirement: any; index: number }) => {
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
            {requirement.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {requirement.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {requirement.description}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

const Requirements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="requirements" className="py-20 bg-[#0B0E13] relative overflow-hidden">
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
            Co potrzebujesz, aby <span className="text-[#00BFFF]">zacząć</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            To wszystko, czego potrzebujesz, aby rozpocząć swoją przygodę z tradingiem.
            Nie musisz być ekspertem - ja nauczę Cię wszystkiego od podstaw.
          </p>
        </motion.div>

        {/* Grid z wymaganiami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((requirement, index) => (
            <RequirementCard key={index} requirement={requirement} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/wspolpraca"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#0B0E13] bg-[#00BFFF] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#00BFFF80] border-2 border-[#00BFFF] hover:bg-[#00BFFF]/90"
          >
            Zacznij teraz
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#00BFFF] font-bold text-xl">Masz to? To wszystko, czego potrzebujesz.</p>
        </div>
      </div>
    </section>
  )
}

export default Requirements 