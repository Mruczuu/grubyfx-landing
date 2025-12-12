'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Wybrane zdjęcia lifestyle'owe
const images = [
    '/images/merol-w-nocy.jpg',
    '/images/portfel.PNG',
    '/images/famemma.jpg',
    '/images/egypt.PNG',
    '/images/streetwear.jpg',
    '/images/mercedes.jpg',
    '/images/biuro.JPG'
];

const AUTO_SLIDE_INTERVAL = 4000; // ms

export default function CallToAction() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (images.length <= 1) return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, AUTO_SLIDE_INTERVAL);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#00bfff] to-[#0078ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left side - Image Slider */}
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
                            {/* Slider Track */}
                            <div className="absolute inset-0">
                                {images.map((image, index) => (
                                    <div
                                        key={image}
                                        className="absolute inset-0 w-full h-full transition-opacity duration-500"
                                        style={{
                                            opacity: currentSlide === index ? 1 : 0,
                                            zIndex: currentSlide === index ? 1 : 0,
                                        }}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Lifestyle ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            quality={90}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
                                <button
                                    onClick={prevSlide}
                                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all transform hover:scale-110"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all transform hover:scale-110"
                                >
                                    →
                                </button>
                            </div>

                            {/* Dots Navigation */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                                            ? 'bg-white scale-125'
                                            : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                Zmień swoje życie za 3... 2... 1...
                            </h2>
                            <p className="text-xl text-white/90">
                                Chcesz odmienić swoje życie? Działaj – a ja pomogę Ci to osiągnąć.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="/wspolpraca"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0B0E13] bg-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] border-2 border-white"
                                >
                                    Wypełnij formularz i zacznij teraz
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </Link>
                            </div>
                            <p className="text-white/75 text-lg">
                                Dołącz do ponad 100 osób, które już zmieniły swoje życie dzięki tradingowi
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
} 