'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [loading, setLoading] = useState<string | null>(null)

  const courses = [
    {
      title: 'Kurs Podstawowy',
      description: 'Idealny dla początkujących traderów. Poznaj fundamenty tradingu, podstawowe strategie i zarządzanie ryzykiem.',
      price: 700,
      features: [
        'Podstawy analizy technicznej',
        'Zarządzanie ryzykiem',
        'Psychologia tradingu',
        'Praktyczne przykłady',
        'Dostęp do materiałów na zawsze'
      ]
    },
    {
      title: 'Kurs Zaawansowany',
      description: 'Dla doświadczonych traderów. Zaawansowane strategie, analiza rynku i optymalizacja wyników.',
      price: 1200,
      features: [
        'Zaawansowane strategie',
        'Analiza fundamentalna',
        'Optymalizacja portfela',
        'Case studies',
        'Dostęp do materiałów na zawsze'
      ]
    }
  ]

  const handlePurchase = async (courseTitle: string, price: number) => {
    setLoading(courseTitle)
    // TODO: Integracja z Stripe
    // Tutaj będzie wywołanie API do Stripe, które zwróci link do płatności
    // Przykład:
    // const response = await fetch('/api/create-checkout', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ course: courseTitle, price })
    // })
    // const { url } = await response.json()
    // window.location.href = url
    
    // Tymczasowo symulacja
    setTimeout(() => {
      alert(`Integracja ze Stripe - kurs: ${courseTitle}, cena: ${price} PLN\n\nLink do płatności zostanie wygenerowany po konfiguracji Stripe.`)
      setLoading(null)
    }, 1000)
  }

  return (
    <section id="kursy" className="py-20 bg-gradient-to-b from-[#0A1120] to-[#090D1F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#33C3FF]/5 rounded-full blur-3xl"></div>
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
            Kursy Edukacyjne
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Rozwijaj swoje umiejętności tradingowe z profesjonalnymi kursami. Od podstaw aż po zaawansowane strategie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#101426]/90 to-[#0A1120]/90 backdrop-blur-sm border-2 border-[#33C3FF]/20 rounded-3xl p-8 hover:border-[#33C3FF]/40 transition-all duration-300 hover:shadow-[0_0_40px_#33C3FF20]"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{course.description}</p>
                
                <div className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#33C3FF] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#090D1F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#33C3FF]/20 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-[#33C3FF]">{course.price} PLN</div>
                    <div className="text-sm text-gray-400">Jednorazowa płatność</div>
                  </div>
                </div>
                <motion.button
                  onClick={() => handlePurchase(course.title, course.price)}
                  disabled={loading === course.title}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] px-6 py-4 rounded-2xl font-bold text-lg shadow-[0_8px_32px_rgba(51,195,255,0.4)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.6)] transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:y-0"
                >
                  <span className="relative z-10">{loading === course.title ? 'Przetwarzanie...' : 'Kup teraz'}</span>
                  {!loading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#33C3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
