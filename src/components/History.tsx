'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const History = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="moja-historia" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Jak wyglądała moja droga?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-dark border border-primary-700 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-primary-400 mb-3">
                Początki
              </h3>
              <p className="text-white/80">
                [Tutaj wstaw swoją historię]
              </p>
            </div>

            <div className="bg-dark border border-primary-700 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-primary-400 mb-3">
                Przełomowy moment
              </h3>
              <p className="text-white/80">
                [Tutaj wstaw swoją historię]
              </p>
            </div>

            <div className="bg-dark border border-primary-700 p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-primary-400 mb-3">
                Gdzie jestem teraz
              </h3>
              <p className="text-white/80">
                [Tutaj wstaw swoją historię]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-2xl border-4 border-primary-800">
              <div className="w-full h-full bg-primary-800 flex items-center justify-center text-primary-300 text-lg">
                [Tutaj wstaw swoje zdjęcie]
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default History 