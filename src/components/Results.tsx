'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Results = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      value: '1,000+',
      label: 'Aktywni uzytkownicy'
    },
    {
      value: '100%',
      label: 'Bezpłatna aplikacja'
    },
    {
      value: '11',
      label: 'Narzędzi w jednej aplikacji'
    }
  ]

  return (
    <section id="wyniki" className="py-20 bg-gradient-to-b from-[#090D1F] to-[#0A1120] overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="uppercase">TAKE PROFIT</span> w liczbach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sprawdź, jak rośnie społeczność traderów korzystających z naszej aplikacji
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 p-8 rounded-xl text-center shadow-xl hover:border-[#33C3FF]/40 transition-all"
            >
              <div className="text-4xl font-bold text-[#33C3FF] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results 