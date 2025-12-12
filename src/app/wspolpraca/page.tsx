'use client'
import { useState, FormEvent, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import emailjs from '@emailjs/browser'

const CollaborationForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        isAdult: false,
        currentOccupation: '',
        readyToPay: false,
        hasTime: false,
        reasons: {
            passive_income: false,
            financial_freedom: false,
            learning: false,
            community: false,
            mentorship: false
        }
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return;

        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            await emailjs.sendForm(
                'service_0xwkb6i',
                'template_l9dgse9',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            setSubmitStatus('success')
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                isAdult: false,
                currentOccupation: '',
                readyToPay: false,
                hasTime: false,
                reasons: {
                    passive_income: false,
                    financial_freedom: false,
                    learning: false,
                    community: false,
                    mentorship: false
                }
            })
        } catch (error) {
            console.error('EmailJS error:', error)
            // Dodaj alert z dokładnym błędem
            alert(`Błąd wysyłki: ${error instanceof Error ? error.message : 'Nieznany błąd'}`)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitStatus === 'success') {
        return (
            <>
                <Navigation />
                <section className="py-20 bg-[#0B0E13] relative overflow-hidden min-h-screen flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00BFFF]/5 to-transparent" />
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-[#00BFFF]/10 to-transparent rounded-3xl p-12 border border-[#00BFFF]/20 backdrop-blur-sm shadow-2xl"
                        >
                            <div className="text-6xl mb-6">✅</div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Dziękujemy za zgłoszenie!
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Skontaktuję się z Tobą w ciągu 48 godzin.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <Navigation />
            <section className="py-20 bg-[#0B0E13] relative overflow-hidden min-h-screen">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00BFFF]/5 to-transparent" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 mt-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Zgłoś się do <span className="text-[#00BFFF]">współpracy</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Wypełnij poniższy formularz, aby rozpocząć swoją drogę do sukcesu w tradingu.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gradient-to-br from-[#00BFFF]/10 to-transparent rounded-3xl p-8 md:p-12 border border-[#00BFFF]/20 backdrop-blur-sm shadow-2xl"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            {/* Dane osobowe */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-white mb-4">📋 Dane osobowe</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Imię i nazwisko *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                            className="w-full px-4 py-3 bg-[#0B0E13]/50 border border-[#00BFFF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-300"
                                            placeholder="Wprowadź swoje imię i nazwisko"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium mb-2">Adres email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full px-4 py-3 bg-[#0B0E13]/50 border border-[#00BFFF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-300"
                                            placeholder="twoj@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-2">Numer telefonu *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                        className="w-full px-4 py-3 bg-[#0B0E13]/50 border border-[#00BFFF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-300"
                                        placeholder="+48 123 456 789"
                                    />
                                </div>
                            </div>

                            {/* Wiek */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white mb-4">🧠 Pytanie o wiek</h2>
                                <div>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="isAdult"
                                            checked={formData.isAdult}
                                            onChange={(e) => setFormData(prev => ({ ...prev, isAdult: e.target.checked }))}
                                            className="w-4 h-4 text-[#00BFFF] bg-[#0B0E13] border-[#00BFFF] rounded focus:ring-[#00BFFF] focus:ring-2"
                                        />
                                        <span className="text-gray-300">Potwierdzam, że mam ukończone 18 lat *</span>
                                    </label>
                                </div>
                            </div>

                            {/* Zawód */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white mb-4">💼 Czym się aktualnie zajmujesz?</h2>
                                <div className="space-y-2">
                                    <label className="block text-white font-medium mb-2">Czym się obecnie zajmujesz? *</label>
                                    <input
                                        type="text"
                                        name="currentOccupation"
                                        required
                                        value={formData.currentOccupation}
                                        onChange={(e) => setFormData(prev => ({ ...prev, currentOccupation: e.target.value }))}
                                        className="w-full px-4 py-3 bg-[#0B0E13]/50 border border-[#00BFFF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Powody współpracy */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white mb-4">📌 Dlaczego interesuje Cię współpraca?</h2>
                                <div className="space-y-2">
                                    {Object.entries({
                                        passive_income: 'Chcę zbudować pasywny dochód',
                                        financial_freedom: 'Zależy mi na wolności finansowej',
                                        learning: 'Chcę się uczyć od najlepszych',
                                        community: 'Szukam społeczności podobnych osób',
                                        mentorship: 'Potrzebuję mentora w tradingu'
                                    }).map(([key, label]) => (
                                        <label key={key} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name={`reasons_${key}`}
                                                checked={formData.reasons[key as keyof typeof formData.reasons]}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    reasons: {
                                                        ...prev.reasons,
                                                        [key]: e.target.checked
                                                    }
                                                }))}
                                                className="w-4 h-4 text-[#00BFFF] bg-[#0B0E13] border-[#00BFFF] rounded focus:ring-[#00BFFF] focus:ring-2"
                                            />
                                            <span className="text-gray-300 text-sm">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Gotowość na opłatę */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white mb-4">💸 Czy jesteś gotowy przeznaczyć 315 zł na dostęp do wiedzy i narzędzi?</h2>
                                <div>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="readyToPay"
                                            checked={formData.readyToPay}
                                            onChange={(e) => setFormData(prev => ({ ...prev, readyToPay: e.target.checked }))}
                                            className="w-4 h-4 text-[#00BFFF] bg-[#0B0E13] border-[#00BFFF] rounded focus:ring-[#00BFFF] focus:ring-2"
                                        />
                                        <span className="text-gray-300">Jestem gotowy/a zainwestować 315zł w swój rozwój *</span>
                                    </label>
                                </div>
                            </div>

                            {/* Dostępność czasowa */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white mb-4">📱 Czy jesteś w stanie poświęcić ok. 1–2h dziennie na naukę i trading z telefonu?</h2>
                                <div>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="hasTime"
                                            checked={formData.hasTime}
                                            onChange={(e) => setFormData(prev => ({ ...prev, hasTime: e.target.checked }))}
                                            className="w-4 h-4 text-[#00BFFF] bg-[#0B0E13] border-[#00BFFF] rounded focus:ring-[#00BFFF] focus:ring-2"
                                        />
                                        <span className="text-gray-300">Mam minimum 2h dziennie na naukę i trading *</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-12 py-6 text-2xl font-bold text-[#0B0E13] bg-[#00BFFF] rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#00BFFF80] border-2 border-[#00BFFF] hover:bg-[#00BFFF]/90 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
                            </button>

                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/20 border border-red-500 text-red-100 rounded-xl text-center">
                                    ❌ Błąd wysyłki. Spróbuj ponownie.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default CollaborationForm 