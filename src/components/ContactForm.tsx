'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Tutaj dodaj logikę wysyłania formularza
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            I jak? Chciałbyś odmienić swoje życie?
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Wypełnij formularz, a ja odezwę się do Ciebie najszybciej jak to możliwe
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-dark border border-primary-700 rounded-xl shadow-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-100">
                Imię i nazwisko
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg bg-dark border border-primary-700 text-white shadow-sm focus:border-primary-400 focus:ring-primary-400 focus:bg-dark/80"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-100">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg bg-dark border border-primary-700 text-white shadow-sm focus:border-primary-400 focus:ring-primary-400 focus:bg-dark/80"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary-100">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg bg-dark border border-primary-700 text-white shadow-sm focus:border-primary-400 focus:ring-primary-400 focus:bg-dark/80"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-100">
                Wiadomość
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg bg-dark border border-primary-700 text-white shadow-sm focus:border-primary-400 focus:ring-primary-400 focus:bg-dark/80"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-400 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Wyślij zgłoszenie
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm 