'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      title: 'Profesjonalne wsparcie',
      description: '[Tutaj wstaw opis korzyści]',
      icon: '👨‍🏫'
    },
    {
      title: 'Sprawdzona metoda',
      description: '[Tutaj wstaw opis korzyści]',
      icon: '✅'
    },
    {
      title: 'Społeczność',
      description: '[Tutaj wstaw opis korzyści]',
      icon: '👥'
    },
    {
      title: 'Elastyczność',
      description: '[Tutaj wstaw opis korzyści]',
      icon: '⚡'
    }
  ]

  return (
    <section id="dlaczego-warto" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Dlaczego warto do mnie dołączyć?
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Prowadzę tysiące ludzi w Polsce i Europie, dzięki mnie ludzie spełniają swoje marzenia i żyją na własnych zasadach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark border border-primary-700 p-8 rounded-xl text-center shadow-xl"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary-400 mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-100">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-dark border border-primary-800 p-8 rounded-xl max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-semibold text-primary-400 mb-4">
              Masz 100% mojej uwagi
            </h3>
            <p className="text-primary-100 mb-6">
              Podejmując ze mną współpracę otrzymujesz pełny profesjonalizm i indywidualne podejście od pierwszego dnia współpracy.
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Rozpocznij współpracę
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs 