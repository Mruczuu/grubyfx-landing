'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [joinCount, setJoinCount] = useState(37)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    // Pierwszy increment po 10 sekundach
    const firstTimeout = setTimeout(() => {
      setJoinCount(prev => prev + 1)
    }, 10000)

    // Potem losowe incrementy co 30-90 sekund
    const interval = setInterval(() => {
      setJoinCount(prev => prev + 1)
    }, Math.random() * 60000 + 30000) // 30-90 sekund

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [])

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
                className="inline-block mb-4 max-w-full"
              >
                <span className="bg-red-500/20 text-red-400 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-bold border border-red-500/40 whitespace-normal inline-flex items-center gap-2 max-w-full animate-pulse">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  UWAGA: Darmowy dostęp tylko do końca miesiąca!
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="block text-[#33C3FF] drop-shadow-[0_2px_12px_#33C3FF99] mb-2">
                  TAKE PROFIT
                </span>
                <span className="block text-white">
                  GRUBYFX
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white font-medium mb-3 leading-relaxed">
                Dołącz do <span className="text-[#33C3FF] font-bold">1000+</span> traderów, którzy już zarabiają z nami każdego dnia!
              </p>

              <p className="text-base text-yellow-400 font-medium mb-4 flex items-center gap-2">
                <span>⚡</span> Ostatnio dołączyło{' '}
                <span className="font-bold inline-flex overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={joinCount}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {joinCount} osób
                    </motion.span>
                  </AnimatePresence>
                </span>{' '}
                w ciągu 24h
              </p>
              
              <p className="text-lg text-gray-400 mb-6">
                Sygnały, analizy, społeczność — <span className="text-[#33C3FF] font-semibold">wszystko za darmo.</span>
              </p>
              
              <motion.a
                href="https://t.me/GRUBYFXADMINISTRACJA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] py-5 px-8 rounded-2xl text-xl font-black shadow-[0_0_30px_rgba(51,195,255,0.5)] hover:shadow-[0_0_50px_rgba(51,195,255,0.8)] transition-all duration-300 text-center cursor-pointer mb-4 animate-pulse"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="uppercase tracking-wider">Dołącz za darmo!</span>
                  <span className="text-2xl">🚀</span>
                </div>
              </motion.a>

              {/* Guarantee */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-sm text-green-400 mb-6 flex items-center gap-2"
              >
                <span>✓</span> Gwarancja: Pierwszy sygnał w ciągu 24h po dołączeniu
              </motion.p>

              {/* Trust badges */}
              <motion.a
                href="https://t.me/GRUBYFXADMINISTRACJA"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6 cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                  <span className="text-xl">🔥</span>
                  <span className="text-sm"><span className="text-white font-bold">1000+</span> członków</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                  <span className="text-xl">💰</span>
                  <span className="text-sm"><span className="text-white font-bold">Zarabiaj</span> codziennie</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                  <span className="text-xl">🎯</span>
                  <span className="text-sm"><span className="text-white font-bold">85%</span> skuteczność</span>
                </div>
              </motion.a>

            </motion.div>
          </div>

          {/* PRAWA: MOCKUP APLIKACJI */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Phone frame */}
                <div className="w-56 sm:w-64 md:w-72 mx-auto">
                  <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1426] rounded-[2.5rem] p-3 shadow-2xl border-4 border-[#33C3FF]/20">
                    <div className="bg-[#090D1F] rounded-[2rem] overflow-hidden">
                      {/* Phone notch */}
                      <div className="h-5 bg-[#090D1F] flex items-center justify-center">
                        <div className="w-24 h-4 bg-black rounded-full"></div>
                      </div>
                      {/* App screen with video */}
                      <div className="aspect-[9/19.5] bg-[#090D1F] relative overflow-hidden">
                        <video
                          ref={videoRef}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-center"
                        >
                          <source src="/takeprofit-app.mov" type="video/quicktime" />
                          <source src="/takeprofit-app.mov" type="video/mp4" />
                        </video>
                        {/* Mute/Unmute button */}
                        <button
                          onClick={toggleMute}
                          className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
                          aria-label={isMuted ? 'Włącz dźwięk' : 'Wycisz'}
                        >
                          {isMuted ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#33C3FF]/20 blur-3xl -z-10"></div>
              </div>
            </motion.div>
            
            {/* Promo code text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-sm text-center"
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="text-yellow-400 font-bold">⚠️ Zarejestruj się z kodem promocyjnym</span>{' '}
                <span className="bg-[#33C3FF]/20 text-[#33C3FF] px-2 py-1 rounded font-mono font-bold">"GRUBYFX"</span>{' '}
                <span className="text-gray-400">aby otrzymać bezpłatny dostęp —</span>{' '}
                <span className="text-red-400 font-semibold">w przeciwnym przypadku oferta będzie nieaktualna.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 