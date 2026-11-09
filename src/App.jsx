import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Features from './components/Features';
import ProductGrid,{ allProducts} from './components/ProductGrid';
import BentoShowcase from './components/BentoShowcase';
import ParallaxBanner from './components/ParallaxBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Preloader from './components/PreLoader';

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
    </>
  );
}

export default App;