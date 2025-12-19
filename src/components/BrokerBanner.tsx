'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BrokerBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gradient-to-r from-[#1a1f3a] to-[#0f1426] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#33C3FF]/10 to-[#33C3FF]/5 border-2 border-[#33C3FF]/30 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-[#33C3FF]/20 text-[#33C3FF] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Partner Broker
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Rozpocznij trading z najlepszym brokerem
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-base">
                Zarejestruj się u naszego partnera i odbierz ekskluzywny bonus <span className="text-[#33C3FF] font-bold">150% do pierwszego depozytu</span>, który w pełni możesz wykorzystać na handel nie ponosząc żadnych ukrytych kosztów.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                Rejestrując się z naszego linku otrzymasz również <span className="text-[#33C3FF] font-semibold">specjalne przywileje w aplikacji TAKE PROFIT</span>. Jeśli masz już konto, to też nic straconego! Wystarczy, że po rejestracji lub posiadając konto skontaktujesz się ze mną, aby odebrać bonus lub otrzymać specjalne przywileje.
              </p>
              <div className="bg-[#090D1F]/60 backdrop-blur-sm border border-[#33C3FF]/30 rounded-xl p-5 mb-6 space-y-4">
                <div>
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Kod promocyjny</div>
                  <div 
                    onClick={() => {
                      navigator.clipboard.writeText('LFOGHu5R');
                      // Możesz dodać toast notification tutaj
                    }}
                    className="text-2xl font-bold text-[#33C3FF] font-mono tracking-wider cursor-pointer hover:text-[#33C3FF]/80 transition-colors select-all"
                  >
                    LFOGHu5R
                  </div>
                </div>
                <div className="border-t border-[#33C3FF]/20 pt-4">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Link do rejestracji</div>
                  <a 
                    href="https://vigco.co/la-com/LFOGHu5R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#33C3FF] break-all hover:text-[#33C3FF]/80 hover:underline transition-colors inline-block"
                  >
                    https://vigco.co/la-com/LFOGHu5R
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <motion.a
                  href="https://vigco.co/la-com/LFOGHu5R"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] px-10 py-4 rounded-2xl text-lg font-bold shadow-[0_8px_32px_rgba(51,195,255,0.4)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.6)] transition-all duration-300 overflow-hidden group whitespace-nowrap flex-1"
                >
                  <span className="relative z-10">Zarejestruj się teraz</span>
                  <span className="relative z-10 text-xl">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#33C3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                <motion.a
                  href="https://t.me/GRUBYFXADMINISTRACJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center justify-center bg-transparent border-2 border-[#33C3FF] text-[#33C3FF] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#33C3FF]/10 hover:border-[#33C3FF]/80 transition-all duration-300 shadow-[0_8px_32px_rgba(51,195,255,0.2)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.4)] backdrop-blur-sm whitespace-nowrap flex-1"
                >
                  Skontaktuj się
                </motion.a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 w-full max-w-sm">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#33C3FF]/20 rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/broker-logo.png" 
                      alt="Partner Broker Logo" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="text-gray-400 text-sm mb-3">Specjalna oferta dla użytkowników</p>
                  <p className="text-3xl font-bold text-white mb-1 uppercase tracking-tight">TAKE PROFIT</p>
                  <p className="text-[#33C3FF] font-semibold uppercase text-sm tracking-wide">TRADER'S APP</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrokerBanner
