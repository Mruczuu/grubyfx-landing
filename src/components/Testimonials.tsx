'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      content: 'Najlepsza aplikacja dla traderów w Polsce! Wszystko w jednym miejscu, zupełnie za darmo. Kalendarz makroekonomiczny i sygnały to game changer.',
      author: 'Michał K.',
      role: 'Trader',
      rating: 5
    },
    {
      content: 'Używam aplikacji od miesiąca i jestem zachwycony. Trading Journal pomaga mi śledzić wszystkie transakcje, a quizy są świetnym sposobem na naukę.',
      author: 'Anna W.',
      role: 'Początkujący trader',
      rating: 5
    },
    {
      content: 'FedWatch i kalkulator pozycji to narzędzia, których brakowało na polskim rynku. Dzięki Take Profit mój trading stał się bardziej profesjonalny.',
      author: 'Piotr S.',
      role: 'Zaawansowany trader',
      rating: 5
    }
  ]

  return (
    <section id="opinie" className="py-20 bg-gradient-to-b from-[#0A1120] to-[#090D1F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Co mówią użytkownicy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zobacz, co mówią traderzy korzystający z Take Profit Traders App
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#101426]/80 to-[#0A1120]/80 backdrop-blur-sm border border-[#33C3FF]/20 p-8 rounded-xl shadow-xl hover:border-[#33C3FF]/40 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#33C3FF]/30 to-[#33C3FF]/10 mr-4 flex items-center justify-center text-xl font-bold text-[#33C3FF]">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#pobierz"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-block bg-gradient-to-r from-[#33C3FF] to-[#00A8E8] text-[#090D1F] px-10 py-4 rounded-2xl text-lg font-bold shadow-[0_8px_32px_rgba(51,195,255,0.4)] hover:shadow-[0_12px_40px_rgba(51,195,255,0.6)] transition-all duration-300 text-center overflow-hidden group"
          >
            <span className="relative z-10">Dołącz do społeczności</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8] to-[#33C3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 