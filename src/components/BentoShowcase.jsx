import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function BentoShowcase() {
  // Track which card is currently hovered
  const [hovered, setHovered] = useState(null);

  // Dynamic width calculations for the 3 main vertical columns
  const getWidths = () => {
    switch (hovered) {
      case 'c0': return ['md:w-[60%]', 'md:w-[20%]', 'md:w-[20%]'];
      case 'c1': 
      case 'c3': return ['md:w-[30%]', 'md:w-[45%]', 'md:w-[25%]'];
      case 'c2': return ['md:w-[30%]', 'md:w-[25%]', 'md:w-[45%]'];
      default: return ['md:w-[50%]', 'md:w-[25%]', 'md:w-[25%]']; // Default State
    }
  };

  // Dynamic height calculations for the middle column's split (Card 1 & Card 3)
  const getHeights = () => {
    switch (hovered) {
      case 'c1': return ['h-[65%]', 'h-[35%]'];
      case 'c3': return ['h-[35%]', 'h-[65%]'];
      default: return ['h-[50%]', 'h-[50%]']; // Default State
    }
  };

  const [leftW, midW, rightW] = getWidths();
  const [topH, bottomH] = getHeights();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-kasavu-cream">
      
      {/* Section Header */}
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-kasavu-dark">The Kasavu Story</h2>
        <div className="w-20 h-1 bg-kasavu-gold rounded-full mx-auto md:mx-0 mb-4"></div>
        <p className="text-gray-500 max-w-2xl text-sm md:text-base">
          Discover the artistry, heritage, and pure craftsmanship woven into every thread of our authentic Kerala handlooms.
        </p>
      </div>

      {/* Interactive Flex Layout */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-150">
        
        {/* ================= LEFT COLUMN (Card 0) ================= */}
        <motion.div 
          layout
          onMouseEnter={() => setHovered('c0')}
          onMouseLeave={() => setHovered(null)}
          className={`relative rounded-3xl overflow-hidden group cursor-pointer w-full h-75 md:h-full ${leftW} transition-all duration-700 ease-in-out shadow-sm hover:shadow-2xl`}
        >
          {/* Background Image */}
          <img 
            src="https://ramrajcotton.in/cdn/shop/files/Diwali_Ramyyam_Sarees_Mobile_Cover_Page_2025_-3_cbfa86da-150c-47da-9833-3c065f4216f4.jpg?v=1759579348&width=800" 
            alt="Weaving Process" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 w-full min-w-75">
            <span className="bg-kasavu-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">
              Heritage
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
              The Artisan's Touch
            </h3>
            {/* Hides text smoothly when space is minimized */}
            <motion.p 
              layout 
              className={`text-gray-300 text-sm max-w-sm overflow-hidden transition-all duration-500 ${hovered && hovered !== 'c0' ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}
            >
              Every saree passes through the hands of master weavers who have perfected the art of the loom over generations.
            </motion.p>
          </div>
        </motion.div>

        {/* ================= MIDDLE COLUMN (Cards 1 & 3) ================= */}
        <motion.div 
          layout
          className={`flex flex-col gap-4 md:gap-6 w-full h-100 md:h-full ${midW} transition-all duration-700 ease-in-out`}
        >
          
          {/* Top Middle Card (Card 1) */}
          <motion.div 
            layout
            onMouseEnter={() => setHovered('c1')}
            onMouseLeave={() => setHovered(null)}
            className={`bg-kasavu-dark rounded-3xl p-6 md:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-sm hover:shadow-xl w-full ${topH} transition-all duration-700 ease-in-out`}
          >

                   <img 
            src="https://ramrajcotton.in/cdn/shop/files/Kurthi_Website_Square-4.jpg?v=1787982822&width=1200" 
            alt="Bridal Collection" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
            <div className="absolute -right-6 -top-6 text-white/5 rotate-12 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
              <Sparkles size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10 flex justify-between items-start min-w-37.5">
              <Sparkles className="text-kasavu-gold" size={24} />
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-kasavu-gold group-hover:border-kasavu-gold transition-colors duration-300 shrink-0">
                <ArrowUpRight className="text-white" size={16} />
              </div>
            </div>
            <div className="relative z-10 min-w-37.5">
              <h3 className="text-xl md:text-2xl font-serif text-white mb-1 whitespace-nowrap">100% Pure</h3>
              <p className="text-gray-400 text-xs font-medium tracking-wide uppercase whitespace-nowrap">Original Gold Zari</p>
            </div>
          </motion.div>

          {/* Bottom Middle Card (Card 3) */}
<motion.div 
            layout
            onMouseEnter={() => setHovered('c3')}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl w-full ${bottomH} transition-all duration-700 ease-in-out`}
          >
            <img 
              src="https://www.pothys.com/cdn/shop/files/About-us-banner.avif?v=1785219505&width=1200" 
              alt="Direct from Weavers" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>

            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start mb-4 min-w-37.5">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white transition-colors duration-300 shrink-0">
                  <ArrowUpRight className="text-white group-hover:text-kasavu-dark" size={16} />
                </div>
              </div>
              <div className="min-w-37.5">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 whitespace-nowrap">Direct from Weavers</h3>
                <motion.p 
                  layout 
                  className={`text-gray-300 text-xs leading-relaxed overflow-hidden transition-all duration-500 ${hovered && hovered !== 'c3' ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}
                >
                  By removing middlemen, we ensure our artisans get fair wages while you get authentic quality at honest prices.
                </motion.p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* ================= RIGHT COLUMN (Card 2) ================= */}
        <motion.div 
          layout
          onMouseEnter={() => setHovered('c2')}
          onMouseLeave={() => setHovered(null)}
          className={`relative rounded-3xl overflow-hidden group cursor-pointer w-full h-75 md:h-full ${rightW} transition-all duration-700 ease-in-out shadow-sm hover:shadow-xl`}
        >
          {/* Background Image */}
          <img 
            src="https://www.pothys.com/cdn/shop/files/weddingcollecation2026mail-Copy-7.jpg?v=1770785562&width=533" 
            alt="Bridal Collection" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="self-end w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white transition-colors duration-300">
              <ArrowUpRight className="text-white group-hover:text-kasavu-dark" size={16} />
            </div>
            <div className="min-w-37.5">
              <h3 className="text-2xl font-serif text-white mb-1 whitespace-nowrap">Bridal Edits</h3>
              <p className="text-white/80 text-xs font-medium tracking-wide whitespace-nowrap">Explore Collection</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}