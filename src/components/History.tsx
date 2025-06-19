'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const timelineData = [
  {
    year: '2018',
    title: 'Początki',
    description: 'Zawsze miałem ambicję, żeby zarabiać własne pieniądze. Już w wieku 13 lat roznosiłem ulotki i zbierałem borówki, a mając 15 lat handlowałem limitowanymi ciuchami. To nie dlatego, że musiałem – ja po prostu chciałem więcej.',
    image: '/images/streetwear.jpg',
    icon: '🎒'
  },
  {
    year: '2020',
    title: 'Pierwsze kroki w tradingu',
    description: 'W wieku 18 lat trafiłem na Forex. Wiedziałem, że to może być droga do wolności. Zacząłem grać na demo, po godzinach uczyłem się wszystkiego na własną rękę, oglądając rynki i testując strategie.',
    image: '/images/pierwszepozycje.PNG',
    icon: '💸'
  },
  {
    year: '2021',
    title: 'McDonald\'s i programowanie',
    description: 'Pracowałem na porannych zmianach w McDonald\'s, żeby mieć popołudnia wolne na naukę. Po każdej zmianie jechałem do kawiarni, odpalałem laptopa i uczyłem się programowania. Codziennie. 7 dni w tygodniu. Powtarzałem w głowie: Stać cię na więcej, Kacper.',
    image: '/images/mcd2.PNG',
    icon: '💻'
  },
  {
    year: '2021-2022',
    title: 'Punkt przełomowy',
    description: 'Znalazłem gościa, który uczył tradingu i dostał prowizję za to, że ktoś wpłacił depozyt. Od razu zapytałem brokera: Czy też mogę tak robić? Usłyszałem: Tak, przyjedź do Warszawy. Wsiadłem w auto o 1 w nocy, jechałem 500 km i o 9:00 byłem w biurze. To była najważniejsza decyzja mojego życia.',
    image: '/images/wwa.PNG',
    icon: '🚗'
  },
  {
    year: '2022-2024',
    title: 'Praca w IT',
    description: 'Zacząłem pracę jako informatyk w państwowej spółce – zarządzałem 200 stanowiskami, ale wiedziałem, że trading daje mi więcej: swobodę, skalę, emocje i pieniądze. Zacząłem zarabiać więcej niż na etacie.',
    image: '/images/biuro.JPG',
    icon: '💼'
  },
  {
    year: '2024',
    title: 'TAKE PROFIT',
    description: 'Założyłem własną firmę. W 2024 roku zarobiłem ponad 200.000 PLN na giełdzie, kupiłem lokal i stworzyłem platformę edukacyjną TAKE PROFIT. Moim celem było przekazać dalej to, co naprawdę działa.',
    image: '/images/famemma.jpg',
    icon: '🚀'
  },
  {
    year: '2025',
    title: 'Invest Cuffs / obecna pozycja',
    description: 'Wystąpiłem jako prelegent na największych targach inwestycyjnych w Polsce – Invest Cuffs. Dziś uczę ludzi jak zarabiać na tradingu, buduję społeczność i daję wartość tym, którzy są gotowi zapie*dalać.',
    image: '/images/cuffs.jpg',
    icon: '🎤'
  }
]

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative mb-20"
    >
      {/* Linia łącząca */}
      {index < timelineData.length - 1 && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#00BFFF] to-transparent z-0" />
      )}

      <div className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* TREŚĆ */}
        <div className="w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00BFFF]/20 to-transparent rounded-full flex items-center justify-center border-2 border-[#00BFFF]/30 shadow-lg">
                <span className="text-3xl">{item.icon}</span>
              </div>
              {/* Neonowy glow */}
              <div className="absolute inset-0 rounded-full border border-[#00BFFF]/50 shadow-[0_0_20px_#00BFFF40] animate-pulse" />
            </div>
            <div>
              <div className="text-[#00BFFF] font-bold text-lg tracking-wider">{item.year}</div>
              <h3 className="text-3xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* ZDJĘCIE */}
        <div className="w-1/2 relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 to-transparent opacity-50 z-10" />
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={450}
              className="w-full h-96 md:h-[28rem] lg:h-[32rem] object-cover object-center-top transition-transform duration-500"
            />
            <div className="absolute inset-0 border border-[#00BFFF]/30 rounded-2xl" />
            {/* Neonowy glow */}
            <div className="absolute inset-0 rounded-2xl border border-[#00BFFF]/50 shadow-[0_0_30px_#00BFFF20]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const History = () => {
  return (
    <section id="history" className="py-20 bg-[#0B0E13] relative overflow-hidden">
      {/* Tło z efektami */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00BFFF]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Moja <span className="text-[#00BFFF]">Historia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Od zwykłego pracownika do niezależnego tradera i mentora. Poznaj drogę, która doprowadziła mnie do sukcesu.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Statystyki */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-[#00BFFF]/20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00BFFF] mb-2">200k+</div>
            <div className="text-gray-300">Zarobki w 2024</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00BFFF] mb-2">100+</div>
            <div className="text-gray-300">Przeszkolonych osób</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00BFFF] mb-2">5</div>
            <div className="text-gray-300">Lat doświadczenia</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default History 