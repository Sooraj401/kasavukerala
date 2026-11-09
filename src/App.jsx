import { useState, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Features from './components/Features';
import ProductGrid,{ allProducts} from './components/ProductGrid';
import BentoShowcase from './components/BentoShowcase';
import ParallaxBanner from './components/ParallaxBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Preloader from './components/PreLoader';
import { MessageCircle } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    
    if (productId) {
      const product = allProducts.find(p => p.id === productId);
      if (product && product.img) {
        window.location.replace(product.img);
        return; 
      }
    }
  }, []);

  // Lock scrolling while the preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const whatsappNumber = "918940809388";
  const defaultMessage = "Hi Kasavu Kerala, I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      {/* 
        AnimatePresence allows components to animate out when they are 
        removed from the React tree (like our Preloader) 
      */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroCarousel />
          <Features />
            <BentoShowcase />
          <ProductGrid />
          <ParallaxBanner />
          <Testimonials />
        </main>
        <Footer />
      </div>
      {/* Floating WhatsApp Button */}
      {!isLoading && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
          className="fixed bottom-6 right-6 z-[90] bg-[#206620] text-white lg:p-4 p-2 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center group"
        >
          {/* WhatsApp Icon */}
          {/* <MessageCircle size={30} strokeWidth={2} /> */}
          <img src="/whatsapp-icon.svg" alt="WhatsApp Icon" className="lg:w-10 w-8 lg:h-10 h-8" />
          
          {/* Tooltip (Hover ചെയ്യുമ്പോൾ മാത്രം കാണിക്കും) */}
          <span className="absolute right-16 bg-white text-kasavu-dark text-xs font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Chat with us
          </span>
          
          {/* പൾസിംഗ് എഫക്ട് (Pulsing ring) */}
          <span className="absolute w-full h-full bg-[#25D366] rounded-full -z-10 animate-ping opacity-40"></span>
        </motion.a>
      )}
    </>
  );
}

export default App;