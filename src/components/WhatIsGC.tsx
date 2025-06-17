'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhatIsGC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="czym-jest-gc" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Czym jest moja grupa?
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Jest to społeczność ludzi, którzy dążą do wolności finansowej i geograficznej oraz polepszenia komfortu życia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Nasza misja',
              content: '[Tutaj wstaw opis misji]'
            },
            {
              title: 'Nasze wartości',
              content: '[Tutaj wstaw opis wartości]'
            },
            {
              title: 'Nasze cele',
              content: '[Tutaj wstaw opis celów]'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-dark border border-primary-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-4">
                {item.title}
              </h3>
              <p className="text-primary-100">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Dołącz do nas
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsGC 