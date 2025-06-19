'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0E13] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEWA: ZDJĘCIE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            {/* Neonowa poświata */}
            <div className="absolute inset-0 bg-[#00BFFF] opacity-10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 to-transparent opacity-50 rounded-2xl" />
              <Image
                src="/images/profilowe.PNG"
                alt="Kacper Mruk"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-cover border border-[#00BFFF]/20 filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Neonowa ramka */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#00BFFF]/30 shadow-[0_0_30px_#00BFFF40]" />
            </div>
          </motion.div>

          {/* PRAWA: TEKST */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-[#00BFFF] font-medium tracking-wider"
              >
                Cześć, nazywam się
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
              >
                <span className="bg-gradient-to-r from-[#00BFFF] to-[#00FFFF] bg-clip-text text-transparent drop-shadow-[0_0_10px_#00BFFF40]">
                  Kacper Mruk
                </span>
                <span className="block mt-4 text-white leading-tight">
                  i pokażę Ci w prosty sposób, jak zrozumieć trading oraz jak dzięki tej umiejętności zarabiać potężne pieniądze!
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-gray-300 max-w-2xl"
              >
                Spędziłem blisko 5 lat, aby opracować odpowiedni system, który pozwolił mi stać się niezależnym czasowo oraz geograficznie. Zanim przejdę do sedna poznaj mnie bliżej!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                {/* Główny CTA */}
                <ScrollLink
                  to="what-is-tp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0B0E13] bg-[#00BFFF] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_#00BFFF60] border-2 border-[#00BFFF] cursor-pointer"
                >
                  Zobacz ofertę
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </ScrollLink>
                {/* Drugi CTA */}
                <a
                  href="https://t.me/takeprofitnewsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_#00BFFF40] border-2 border-[#00BFFF] hover:bg-[#00BFFF]/10"
                >
                  Darmowa grupa
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// Add these styles to your globals.css
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/ 