'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      title: 'Krok 1',
      description: '[Tutaj wstaw opis pierwszego kroku]',
      icon: '🎯'
    },
    {
      title: 'Krok 2',
      description: '[Tutaj wstaw opis drugiego kroku]',
      icon: '📚'
    },
    {
      title: 'Krok 3',
      description: '[Tutaj wstaw opis trzeciego kroku]',
      icon: '💰'
    },
    {
      title: 'Krok 4',
      description: '[Tutaj wstaw opis czwartego kroku]',
      icon: '🚀'
    }
  ]

  return (
    <section id="jak-to-dziala" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Jak to działa?
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Poznaj proces, który pomoże Ci osiągnąć finansową niezależność
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark border border-primary-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-primary-400 mb-3">
                {step.title}
              </h3>
              <p className="text-primary-100">
                {step.description}
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
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Rozpocznij swoją drogę
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks 