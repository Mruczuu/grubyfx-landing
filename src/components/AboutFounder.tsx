'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutFounder = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="o-mnie" className="py-20 bg-gradient-to-b from-[#090D1F] to-[#0A1120] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#33C3FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            O założycielu
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kacper Mruk - trader, przedsiębiorca, twórca pierwszej bezpłatnej aplikacji dla traderów w Polsce
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/images/Ja.png"
                alt="Kacper Mruk"
                className="rounded-3xl shadow-2xl max-w-sm w-full border-4 border-[#33C3FF]/30"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#33C3FF] text-[#090D1F] px-6 py-3 rounded-xl font-bold shadow-xl">
                Założyciel Take Profit
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[#33C3FF] mb-4">Wizja i misja</h3>
              <p className="text-gray-300 leading-relaxed">
                Stworzyłem Take Profit Traders App, aby każdy trader w Polsce miał dostęp do profesjonalnych 
                narzędzi bez żadnych barier finansowych. Wierzę, że edukacja i narzędzia tradingowe powinny 
                być dostępne dla wszystkich, niezależnie od budżetu.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[#33C3FF] mb-4">Doświadczenie</h3>
              <p className="text-gray-300 leading-relaxed">
                Jako doświadczony trader i przedsiębiorca, rozumiem wyzwania, przed którymi stają początkujący 
                i zaawansowani traderzy. Ta aplikacja to efekt lat doświadczeń i chęci dzielenia się wiedzą 
                z całym środowiskiem tradingowym w Polsce.
              </p>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/kacperfxtp/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-bold text-center shadow-[0_8px_32px_rgba(168,85,247,0.4)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.6)] transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Instagram</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="#pobierz"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex-1 bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] px-6 py-4 rounded-2xl font-bold text-center shadow-[0_8px_32px_rgba(51,195,255,0.4)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.6)] transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Pobierz aplikację</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#33C3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutFounder
