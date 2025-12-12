'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

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

const Footer = () => (
  <footer className="bg-[#0B0E13] py-12 px-4 border-t border-[#00BFFF]/20">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-lg font-bold text-white mb-4">Wyłączenie odpowiedzialności</h3>
      <p className="text-white/70 text-sm leading-relaxed">
        Prezentowane treści mają wyłącznie charakter informacyjny i prezentują opinie własne autora. Treści te sporządzone zostały rzetelnie, z należytą starannością i nie stanowią podstawy do podejmowania decyzji inwestycyjnych, porady inwestycyjnej ani badań inwestycyjnych w rozumieniu art. 36 Rozporządzenia Delegowanego Komisji (UE) 2017/565 z dnia 25 kwietnia 2016 r. uzupełniającego dyrektywę Parlamentu Europejskiego i Rady 2014/65/UE w odniesieniu do wymogów organizacyjnych i warunków prowadzenia działalności przez firmy inwestycyjne.
        <br /><br />
        Autor, organizator oraz podmioty biorące udział w wydarzeniu nie ponoszą odpowiedzialności za wszelkie szkody poniesione w związku z wykorzystaniem niniejszych treści i decyzjami podejmowanymi na ich podstawie.
      </p>
    </div>
  </footer>
)

export default Navigation
export { Footer } 