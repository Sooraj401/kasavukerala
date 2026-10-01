import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PreLoader({ onLoadingComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3400); 
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const customEase = [0.87, 0, 0.13, 1];

  const brandName = "KASAVU".split("");

  // Animation for the main "KASAVU" letters
  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -80 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      transition: { duration: 1, ease: customEase } 
    },
    exit: { 
      opacity: 0, 
      y: -40, 
      transition: { duration: 0.6, ease: customEase } 
    }
  };

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    exit: {
      transition: { staggerChildren: 0.04, staggerDirection: -1 }
    }
  };

  return (
    <motion.div
      key="preloader"
      exit={{ 
        y: "-100%", 
        transition: { duration: 1.2, ease: customEase, delay: 0.6 } 
      }}
      className="fixed inset-0 z-100 bg-kasavu-cream flex flex-col items-center justify-center w-full h-screen origin-top px-4"
    >
      <div className="flex flex-col items-center justify-center w-full">
        
        {/* Re-designed Two-Tiered Premium Logo Animation */}
        <div className="flex flex-col items-center mb-10">
          
          {/* Top Line: KASAVU. */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="flex perspective-[1000px]"
          >
            <div className="flex overflow-hidden pb-2 pr-1">
              {brandName.map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  className="inline-block origin-bottom text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-kasavu-dark tracking-[0.15em] font-bold leading-none"
                >
                  {char}
                </motion.span>
              ))}
              {/* Gold Period */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: customEase, delay: 0.8 } },
                  exit: { opacity: 0, scale: 0, transition: { duration: 0.4, ease: customEase } }
                }}
                className="inline-block origin-bottom text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-kasavu-gold tracking-normal font-bold leading-none"
              >
                .
              </motion.span>
            </div>
          </motion.div>

          {/* Bottom Line: Kerala */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: customEase, delay: 0.9 }}
            className="text-xs sm:text-sm md:text-base font-sans tracking-[0.4em] uppercase font-semibold text-gray-500 mt-1 md:mt-2"
          >
            Kerala
          </motion.span>
        </div>

        {/* Subtle Decorative Line & Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 1, ease: customEase, delay: 1.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-16 h-0.5 bg-kasavu-gold"></div>
          <p className="text-gray-400 text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-semibold text-center">
            Authentic Handloom Attire
          </p>
        </motion.div>

      </div>

      {/* Decorative Corner Accents */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-4 md:inset-8 border border-kasavu-dark/10 pointer-events-none hidden sm:block"
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-kasavu-gold"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-kasavu-gold"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-kasavu-gold"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-kasavu-gold"></div>
      </motion.div>

    </motion.div>
  );
}