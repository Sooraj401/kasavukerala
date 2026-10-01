import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowDown, Play } from 'lucide-react';

const slides = [
  {
    image: 'https://www.pothys.com/cdn/shop/files/Hertiage_banner_website_1.jpg?v=1790653424&width=2000',
    title: 'Artisan Crafted',
    subtitle: 'HANDLOOM COTTON',
    desc: 'Experience the purity of authentic handloom, meticulously woven by master artisans honoring centuries of Kerala tradition.'
  },
  {
    image: 'https://ramrajcotton.in/cdn/shop/files/Saree_Collection_Website-1.jpg?v=1787983115&width=2000',
    title: 'Elegance Woven in Gold',
    subtitle: 'THE FESTIVE COLLECTION',
    desc: 'Drape yourself in the rich heritage of Kasavu. Featuring authentic gold zari borders that capture the true essence of celebration.'
  },
  {
    image: 'https://ramrajcotton.in/cdn/shop/files/Saree_Collection_Website-3.jpg?v=1787982822&width=2000',
    title: 'Timeless Traditions',
    subtitle: 'EVERYDAY CLASSICS',
    desc: 'Breathable, lightweight, and effortlessly elegant. Discover everyday comfort with our classic collection of Kerala sarees and mundus.'
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play timer that resets when user manually navigates (by adding `current` to dependencies)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-kasavu-dark flex flex-col justify-between">
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={slides[current].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>
        {/* Soft gradient overlay to ensure text readability without hiding the image */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60" />
      </div>

      {/* Floating Side Vertical Text (Editorial Fashion Vibe) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex items-center z-20 origin-left -rotate-90">
        <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Authentic Kerala Handloom • Est. 2026</p>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 w-full max-w-[95%] mx-auto left-0 right-0 flex justify-between items-center z-20 pointer-events-none">
        <button onClick={prevSlide} className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-kasavu-dark transition-all duration-300">
          <ChevronLeft strokeWidth={1.5} size={24} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-kasavu-dark transition-all duration-300">
          <ChevronRight strokeWidth={1.5} size={24} />
        </button>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 grow flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center space-x-4 mb-6"
        >
          <span className="w-8 h-px bg-kasavu-gold hidden md:block"></span>
          <p className="text-kasavu-gold text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
            {slides[current].subtitle}
          </p>
          <span className="w-8 h-px bg-kasavu-gold hidden md:block"></span>
        </motion.div>

        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-200 text-sm md:text-base max-w-lg mb-10 font-light leading-relaxed"
        >
          {slides[current].desc}
        </motion.p>

        <motion.div
          key={`btns-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="bg-white text-kasavu-dark px-10 py-4 uppercase text-xs font-semibold tracking-widest hover:bg-kasavu-gold hover:text-white transition-all duration-300 w-full sm:w-auto">
            Explore Collection
          </button>
          <button className="flex items-center space-x-3 text-white px-8 py-4 uppercase text-xs font-semibold tracking-widest hover:text-kasavu-gold transition-colors duration-300 w-full sm:w-auto justify-center group">
            <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-kasavu-gold transition-colors">
              <Play size={12} fill="currentColor" />
            </span>
            <span>View Story</span>
          </button>
        </motion.div>
      </div>

      {/* Structured Bottom Information Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-end md:items-center">
        
        {/* Left Side: Empty space on mobile, Brand promise on Desktop */}
        <div className="hidden md:block w-1/3">
          <p className="text-white/60 text-xs tracking-wider">Free Global Shipping over ₹5,000</p>
        </div>

        {/* Center: Scroll Indicator */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center mb-6 md:mb-0">
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/50 mb-2"
          >
            <ArrowDown size={18} strokeWidth={1.5} />
          </motion.div>
          <span className="text-white/50 text-[9px] uppercase tracking-[0.3em]">Scroll to explore</span>
        </div>

        {/* Right Side: Slide Counter & Modern Progress Line */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center space-x-6">
          <div className="text-white font-serif text-sm">
            0{current + 1} <span className="text-white/30 mx-1">/</span> 0{slides.length}
          </div>
          
          {/* Progress Indicator */}
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-0.5 transition-all duration-500 rounded-full ${
                  current === idx ? 'w-8 bg-kasavu-gold' : 'w-4 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}