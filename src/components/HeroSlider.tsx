import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section id="hero-slider-section" className="relative h-[480px] sm:h-[560px] md:h-[620px] w-full overflow-hidden bg-neutral-900 text-white">
      {/* Background slide slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Cover image overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent"></div>
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="h-full w-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating UI Elements inside constraints */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl">
          {/* Tag badge with motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${activeSlide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-300"
            >
              <Sparkles className="h-3 w-3" />
              {activeSlide.tag}
            </motion.div>
          </AnimatePresence>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${activeSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {activeSlide.title}
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle / Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 font-sans text-base text-neutral-300 sm:text-lg max-w-lg leading-relaxed"
            >
              {activeSlide.description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Button */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${activeSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <button
                onClick={scrollToCatalog}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-neutral-950 transition-all hover:scale-102 hover:shadow-lg shadow-amber-500/20 active:scale-98"
              >
                {activeSlide.cta}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        id="hero-slider-prev-btn"
        className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-neutral-700 bg-black/30 p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white sm:flex transition-all hover:scale-110 active:scale-90"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        id="hero-slider-next-btn"
        className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-neutral-700 bg-black/30 p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white sm:flex transition-all hover:scale-110 active:scale-90"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-neutral-600 hover:bg-neutral-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
