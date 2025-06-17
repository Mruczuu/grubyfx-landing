'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Requirements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const requirements = [
    {
      title: 'Musisz mieć skończone 18 lat',
      description: 'Możliwość grania na giełdzie wiąże się z tym, że musisz być pełnoletni.',
      icon: '📅'
    },
    {
      title: 'Musisz mieć kapitał na inwestycje',
      description: 'Nie da się rozpocząć z zerowym kapitałem, potrzebujesz choć minimalnego wkładu finansowego (zalecam min. 3000zł)',
      icon: '💰'
    },
    {
      title: 'Musisz mieć telefon z dostępem do internetu',
      description: '90% Twojej pracy, będzie się działa właśnie na tym urządzeniu.',
      icon: '📱'
    },
    {
      title: 'Musisz mieć wizję lepszego życia',
      description: 'Uważam, że odpowiedni mindset to 80% sukcesu w tej branży. Bez niego ani rusz!',
      icon: '🎯'
    }
  ]

  return (
    <section id="wymagania" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Co potrzebujesz, aby zacząć?
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Sprawdź, czy spełniasz podstawowe wymagania
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((requirement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark border border-primary-700 p-8 rounded-xl flex items-start shadow-xl"
            >
              <div className="text-4xl mr-6">{requirement.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-2">
                  {requirement.title}
                </h3>
                <p className="text-primary-100">
                  {requirement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Sprawdź czy się kwalifikujesz
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Requirements 