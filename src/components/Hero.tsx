'use client'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#090D1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEWA: ZDJĘCIE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/ja.png"
              alt="Kacper Mruk"
              className="rounded-2xl shadow-2xl max-w-xs md:max-w-sm lg:max-w-md object-cover border-4 border-[#33C3FF]"
            />
          </div>
          {/* PRAWA: TEKST */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-[#101426]/80 rounded-2xl shadow-2xl p-8 md:p-12 w-full"
            >
              <p className="text-lg text-primary-300 mb-2">Cześć, nazywam się</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                <span className="block text-[#33C3FF] drop-shadow-[0_2px_12px_#33C3FF99]">Kacper Mruk</span>
                <span className="block mt-2 text-white">
                  i pokażę Ci jak w XXI wieku korzystać z internetu<br />
                  i dzięki niemu zarabiać potężne pieniądze!
                </span>
              </h1>
              <p className="text-lg text-primary-100 mb-8">
                Spędziłem kilka lat, aby znaleźć odpowiedni system, który pozwolił mi stać się niezależnym czasowo oraz geograficznie. Zanim przejdę do sedna poznaj mnie bliżej!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#33C3FF] text-[#090D1F] px-8 py-4 rounded-xl text-lg font-bold border-2 border-[#33C3FF] hover:bg-transparent hover:text-[#33C3FF] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_24px_#33C3FF99] shadow-xl">
                  Moja historia
                </button>
                <button className="bg-transparent border-2 border-[#33C3FF] text-[#33C3FF] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#33C3FF] hover:text-[#090D1F] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_24px_#33C3FF99] shadow-xl">
                  Współpracuj ze mną
                </button>
              </div>
            </motion.div>
          </div>
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