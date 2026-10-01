import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-kasavu-cream/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
<div className="flex items-center cursor-pointer group">
            <div className="flex flex-col">
              <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.15em] leading-none transition-colors duration-300 ${isScrolled ? 'text-kasavu-dark' : 'text-white'}`}>
                KASAVU<span className="text-kasavu-gold">.</span>
              </h1>
              <span className={`text-[8px] md:text-[10px] font-sans tracking-[0.4em] uppercase font-semibold mt-1 transition-colors duration-300 ${isScrolled ? 'text-gray-500' : 'text-white/70'} group-hover:text-kasavu-gold`}>
                Kerala
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10">
            {['Collections', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                 className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-kasavu-gold ${
                   isScrolled ? 'text-kasavu-dark' : 'text-white/90'
                 }`}>
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button className={`transition-colors ${isScrolled ? 'text-kasavu-dark hover:text-kasavu-gold' : 'text-white hover:text-kasavu-gold'}`}>
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
            <button 
              className={`md:hidden transition-colors ${isScrolled ? 'text-kasavu-dark' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-60 bg-kasavu-cream flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-kasavu-dark hover:text-kasavu-gold"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {['Collections', 'About', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-kasavu-dark hover:text-kasavu-gold transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}