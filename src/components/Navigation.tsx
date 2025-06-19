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
    { name: 'Moja historia', id: 'history' },
    { name: 'TAKE PROFIT', id: 'what-is-tp' },
    { name: 'Wyniki', id: 'results' },
    { name: 'Opinie', id: 'how-it-works' },
    { name: 'Wymagania', id: 'requirements' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0B0E13]/95 backdrop-blur-md border-b border-[#00BFFF]/20 shadow-2xl'
        : 'bg-[#0B0E13]/80 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text tracking-wider">
              KACPER MRUK
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              // Menu dla strony głównej ze scrollowaniem
              menuItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-white/80 hover:text-[#00BFFF] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))
            ) : (
              // Menu dla innych stron z przekierowaniem na główną
              menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className="text-white/80 hover:text-[#00BFFF] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </Link>
              ))
            )}
            <Link
              href="/wspolpraca"
              className="bg-[#00BFFF] text-[#0B0E13] px-6 py-3 rounded-xl text-sm font-bold hover:bg-white hover:text-[#0B0E13] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#00BFFF60] border-2 border-[#00BFFF]"
            >
              Współpracuj ze mną
            </Link>
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