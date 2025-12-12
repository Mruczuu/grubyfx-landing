'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    'Funkcje',
    'Wyniki',
    'O mnie',
    'Opinie'
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 shadow-lg rounded-b-xl ${
        isScrolled ? 'bg-[#090D1F] bg-opacity-95 shadow-2xl backdrop-blur-md' : 'bg-[#090D1F] bg-opacity-80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-[#33C3FF] tracking-widest uppercase">
              Take Profit
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-[#33C3FF] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="#pobierz" className="bg-[#33C3FF] text-[#090D1F] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#33C3FF]/90 transition-all transform hover:-translate-y-0.5 hover:shadow-xl shadow-md">
              Pobierz aplikację
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation 