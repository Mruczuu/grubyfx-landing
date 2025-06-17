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
      content: '[Tutaj wstaw opinię]',
      author: '[Imię i nazwisko]',
      role: '[Rola/Stanowisko]',
      image: '[URL do zdjęcia]'
    },
    {
      content: '[Tutaj wstaw opinię]',
      author: '[Imię i nazwisko]',
      role: '[Rola/Stanowisko]',
      image: '[URL do zdjęcia]'
    },
    {
      content: '[Tutaj wstaw opinię]',
      author: '[Imię i nazwisko]',
      role: '[Rola/Stanowisko]',
      image: '[URL do zdjęcia]'
    }
  ]

  return (
    <section id="opinie" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Opinie moich podopiecznych
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Zobacz, co mówią osoby, które już ze mną współpracują
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark border border-primary-700 p-8 rounded-xl shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-900 mr-4"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-400">
                    {testimonial.author}
                  </h3>
                  <p className="text-primary-200">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-primary-100 italic">
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
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Dołącz do zadowolonych klientów
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 