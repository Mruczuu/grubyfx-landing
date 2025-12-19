'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DownloadSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="pobierz" className="py-20 bg-gradient-to-b from-[#0A1120] to-[#090D1F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#33C3FF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pobierz aplikację już dziś
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Dołącz do tysięcy traderów, którzy już korzystają z Take Profit Traders App
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a
              href="https://apps.apple.com/pl/app/take-profit-traders-app/id6752708846"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border-2 border-white/20 rounded-2xl px-10 py-5 hover:border-[#33C3FF]/60 hover:bg-gradient-to-br hover:from-gray-800/95 hover:to-gray-700/95 transition-all duration-300 shadow-xl hover:shadow-[0_12px_40px_rgba(51,195,255,0.4)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-medium mb-1">Pobierz z</div>
                  <div className="text-xl font-bold text-white group-hover:text-[#33C3FF] transition-colors">App Store</div>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.takeprofit.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md border-2 border-white/20 rounded-2xl px-10 py-5 hover:border-[#33C3FF]/60 hover:bg-gradient-to-br hover:from-gray-800/95 hover:to-gray-700/95 transition-all duration-300 shadow-xl hover:shadow-[0_12px_40px_rgba(51,195,255,0.4)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-medium mb-1">Pobierz z</div>
                  <div className="text-xl font-bold text-white group-hover:text-[#33C3FF] transition-colors">Google Play</div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Promo code warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              <span className="text-yellow-400 font-bold">⚠️ WAŻNE:</span>{' '}
              Zarejestruj się z kodem promocyjnym{' '}
              <span className="bg-[#33C3FF]/20 text-[#33C3FF] px-2 py-1 rounded font-mono font-bold">"GRUBYFX"</span>{' '}
              aby otrzymać bezpłatny dostęp —{' '}
              <span className="text-red-400 font-semibold">w przeciwnym przypadku oferta będzie nieaktualna.</span>
            </p>
            <motion.a
              href="https://t.me/GRUBYFXADMINISTRACJA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full max-w-md mx-auto bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] py-4 px-8 rounded-2xl text-lg font-black shadow-[0_0_30px_rgba(51,195,255,0.5)] hover:shadow-[0_0_50px_rgba(51,195,255,0.8)] transition-all duration-300 text-center cursor-pointer"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl">💬</span>
                <span className="uppercase tracking-wider">Skontaktuj się teraz!</span>
                <span className="text-xl">💬</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadSection
