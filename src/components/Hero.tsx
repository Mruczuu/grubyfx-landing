'use client'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#090D1F] via-[#0A1120] to-[#090D1F] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#33C3FF]/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#33C3FF]/10 rounded-full blur-3xl animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEWA: TEKST */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-[#33C3FF]/20 text-[#33C3FF] px-4 py-2 rounded-full text-sm font-semibold border border-[#33C3FF]/30">
                  Pierwsza bezpłatna aplikacja dla traderów w Polsce
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="block text-white mb-2">
                  TAKE PROFIT
                </span>
                <span className="block text-[#33C3FF] drop-shadow-[0_2px_12px_#33C3FF99]">
                  TRADER'S APP
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed">
                Wszystkie najważniejsze narzędzia tradera w jednym miejscu
              </p>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Kalendarz makroekonomiczny, codzienne analizy, darmowe sygnały, Trading Journal, 
                FedWatch, kalkulator pozycji, społeczność traderów, quizy edukacyjne i kursy. 
                <span className="text-[#33C3FF] font-semibold"> Wszystko zupełnie bezpłatnie.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href="#pobierz"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] px-10 py-4 rounded-2xl text-lg font-bold shadow-[0_8px_32px_rgba(51,195,255,0.4)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.6)] transition-all duration-300 text-center overflow-hidden group"
                >
                  <span className="relative z-10">Pobierz aplikację</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#33C3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                <motion.a
                  href="#funkcje"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-transparent border-2 border-[#33C3FF] text-[#33C3FF] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#33C3FF]/10 hover:border-[#33C3FF]/80 transition-all duration-300 shadow-[0_8px_32px_rgba(51,195,255,0.2)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.4)] text-center backdrop-blur-sm"
                >
                  Zobacz funkcje
                </motion.a>
              </div>

              {/* App Store badges */}
              <div className="flex gap-4 flex-wrap">
                <motion.a
                  href="https://apps.apple.com/pl/app/take-profit-traders-app/id6752708846"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:border-[#33C3FF]/50 hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-700/90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_8px_24px_rgba(51,195,255,0.3)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Pobierz z</div>
                      <div className="text-base font-bold text-white group-hover:text-[#33C3FF] transition-colors">App Store</div>
                    </div>
                  </div>
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.takeprofit.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:border-[#33C3FF]/50 hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-700/90 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_8px_24px_rgba(51,195,255,0.3)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Pobierz z</div>
                      <div className="text-base font-bold text-white group-hover:text-[#33C3FF] transition-colors">Google Play</div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* PRAWA: MOCKUP APLIKACJI */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Phone frame */}
                <div className="w-64 sm:w-80 md:w-96 mx-auto">
                  <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1426] rounded-[3rem] p-4 shadow-2xl border-4 border-[#33C3FF]/20">
                    <div className="bg-[#090D1F] rounded-[2.5rem] overflow-hidden">
                      {/* Phone notch */}
                      <div className="h-6 bg-[#090D1F] flex items-center justify-center">
                        <div className="w-32 h-5 bg-black rounded-full"></div>
                      </div>
                      {/* App screen with video */}
                      <div className="aspect-[9/19.5] bg-[#090D1F] relative overflow-hidden">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-center"
                        >
                          <source src="/takeprofit-app.mov" type="video/quicktime" />
                          <source src="/takeprofit-app.mov" type="video/mp4" />
                          {/* Fallback jeśli wideo nie załaduje się */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#33C3FF]/10 to-[#090D1F] flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-24 h-24 bg-[#33C3FF]/20 rounded-3xl mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl">📱</span>
                              </div>
                              <p className="text-[#33C3FF] font-bold text-xl mb-2">TAKE PROFIT</p>
                              <p className="text-gray-400 text-sm">TRADER'S APP</p>
                            </div>
                          </div>
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#33C3FF]/20 blur-3xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 