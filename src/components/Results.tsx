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
      value: '1200$',
      label: 'Średnie tygodniowe zarobki moich podopiecznych'
    },
    {
      value: '25000$',
      label: 'Najwyższe tygodniowe zarobki moich podopiecznych'
    },
    {
      value: '1000+',
      label: 'Zadowolonych klientów'
    }
  ]

  return (
    <section id="moje-wyniki" className="py-20 bg-dark overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Wyniki moje i moich podopiecznych
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Sprawdź, jakie rezultaty osiągają osoby pracujące ze mną
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark border border-primary-700 p-8 rounded-xl text-center shadow-xl"
            >
              <div className="text-4xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-dark border border-primary-800 rounded-xl shadow-2xl p-8"
        >
          <div className="aspect-w-16 aspect-h-9 bg-primary-900 rounded-xl mb-8 flex items-center justify-center text-primary-300">
            [Tutaj wstaw wideo z wynikami]
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Jesteś ciekaw jak wygląda taka gra na giełdzie?
            </h3>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl">
              Zobacz przykładowe wyniki
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results 