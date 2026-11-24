"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Flame } from "lucide-react";

const slides = [
  {
    id: 1,
    src: "/img2.jpg",
    badge: "Certified Fire Protection",
    title: "Industrial Fire Line & Hydrant Systems",
    subtitle:
      "Turnkey fire-fighting pipelines, sprinkler networks, and addressable fire alarm installations built to strict statutory compliance.",
  },
  {
    id: 2,
    src: "/img1.jpg",
    badge: "Thermal & Utility Piping",
    title: "Non-IBR Boiler Lines, Chillers & Cooling Towers",
    subtitle:
      "Precision mechanical piping, boiler water tanks, and high-efficiency cooling infrastructure for continuous plant operations.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop",
    badge: "Heavy Structural Fabrication",
    title: "Industrial Chimneys & Structural Tin Sheds",
    subtitle:
      "Custom-engineered self-supporting MS/SS exhaust chimneys and heavy-duty factory sheds executed with zero compromise on safety.",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[78vh] md:h-[88vh] pt-20 overflow-hidden bg-zinc-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].src}
            alt={slides[currentIndex].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Dark Gradient Overlays for Crisp White Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />

          {/* Left-Aligned Content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-center">
            <div className="max-w-3xl">
              {/* Red & White Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
              >
                <Flame className="w-3.5 h-3.5 text-red-500" />
                <span>{slides[currentIndex].badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm"
              >
                {slides[currentIndex].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-base md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-10"
              >
                {slides[currentIndex].subtitle}
              </motion.p>

              {/* Red Primary Button + White Glass Secondary Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/25"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-7 py-3.5 rounded-full font-medium hover:bg-white hover:text-slate-900 backdrop-blur-md transition-all"
                >
                  Request Site Quote
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-8 inset-x-0 z-20 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Red Active Slide Indicator */}
        <div className="flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-10 bg-red-600"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-3 rounded-full bg-zinc-900/80 border border-white/15 text-white hover:bg-red-600 hover:border-red-600 transition-all backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-3 rounded-full bg-zinc-900/80 border border-white/15 text-white hover:bg-red-600 hover:border-red-600 transition-all backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}