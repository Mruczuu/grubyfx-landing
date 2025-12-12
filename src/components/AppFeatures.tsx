'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AppFeatures = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: '📅',
      title: 'Kalendarz Makroekonomiczny',
      description: 'Śledź wszystkie ważne wydarzenia ekonomiczne w czasie rzeczywistym. Nie przegap żadnego kluczowego raportu czy decyzji banków centralnych.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '✍️',
      title: 'Codzienne Wpisy',
      description: 'Najważniejsze analizy i komentarze rynkowe przygotowane specjalnie dla Ciebie. Zawsze na bieżąco z tym, co dzieje się na rynkach.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📰',
      title: 'Take Profit Blog',
      description: 'Aktualne sytuacje rynkowe opisywane na żywo. Głębokie analizy, przewidywania i komentarze eksperckie.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '📊',
      title: 'Darmowe Sygnały',
      description: 'Profesjonalne sygnały tradingowe całkowicie za darmo. Wykorzystaj wiedzę ekspertów bez żadnych kosztów.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📰',
      title: 'Newsroom',
      description: 'Wszystkie dane rynkowe na bieżąco w jednym miejscu. Bądź zawsze o krok przed innymi traderami.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '📝',
      title: 'Trading Journal',
      description: 'Śledź swoje transakcje, analizuj wyniki i ucz się na błędach. Profesjonalny dziennik tradingowy w Twoim telefonie.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🏦',
      title: 'FedWatch',
      description: 'Monitoruj wyceny przyszłości obniżek stóp procentowych. Zobacz, co rynek myśli o decyzjach Fed.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '🧮',
      title: 'Kalkulator Wielkości Pozycji',
      description: 'Obliczaj optymalną wielkość pozycji zgodnie z zarządzaniem ryzykiem. Zawsze handluj bezpiecznie.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: '💬',
      title: 'Community',
      description: 'Czaty społecznościowe z innymi traderami. Wymieniaj się doświadczeniami, ucz się i buduj sieć kontaktów.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: '🎯',
      title: 'Quizy Edukacyjne',
      description: 'Ucz się w interaktywny sposób. Rozwiązuj quizy i testuj swoją wiedzę o tradingu i rynkach finansowych.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: '🎓',
      title: 'Kursy Edukacyjne',
      description: 'Od podstawowego poziomu aż po zaawansowane strategie. Kompleksowa edukacja tradingowa w jednym miejscu.',
      color: 'from-amber-500 to-yellow-500'
    }
  ]

  return (
    <section id="funkcje" className="py-20 bg-gradient-to-b from-[#090D1F] to-[#0A1120] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#33C3FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#33C3FF]/5 rounded-full blur-3xl"></div>
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
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kompletny zestaw narzędzi tradera wspierany przez modele AI. Wszystko w jednej aplikacji, całkowicie bezpłatnie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 rounded-2xl p-6 hover:border-[#33C3FF]/40 transition-all duration-300 hover:shadow-[0_0_30px_#33C3FF20] hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#33C3FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#33C3FF]/20 to-[#33C3FF]/10 border border-[#33C3FF]/30 rounded-2xl px-8 py-6">
            <p className="text-2xl font-bold text-white mb-2">
              Wszystko to jest <span className="text-[#33C3FF]">całkowicie bezpłatne</span>
            </p>
            <p className="text-gray-300">
              Bez ukrytych kosztów, bez subskrypcji, bez limitów
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppFeatures
