import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ParallaxBanner() {
  // Animation variants for staggered reveal when scrolling into view
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative h-[75vh] min-h-150 flex items-center overflow-hidden">
      
      {/* 1. Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover transform scale-105"
        style={{ backgroundImage: "url('https://southloom.com/cdn/shop/files/20200527_152539_dd181b12-efc5-435b-9ec4-e5e028eae2b4_1500x.jpg?v=1630530559')" }}
      ></div>
      
      {/* 2. Sophisticated Gradient Overlay (Darker on the left for text readability, fades to right) */}
      <div className="absolute inset-0 bg-linear-to-r from-kasavu-dark/95 via-kasavu-dark/60 to-transparent z-10"></div>
      
      {/* 3. Decorative Editorial Frame */}
      <div className="absolute inset-4 md:inset-8 border border-white/10 z-10 pointer-events-none hidden sm:block"></div>

      {/* 4. Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          className="max-w-2xl"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-8">
            <span className="w-12 h-px bg-kasavu-gold"></span>
            <span className="uppercase tracking-[0.4em] text-kasavu-gold text-xs font-bold">Heritage & Craft</span>
          </motion.div>
          
          {/* Main Title with mixed font styling */}
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.15]">
            The Art of <br />
            <span className="italic font-light text-white/90">Handloom</span>
          </motion.h2>
          
          {/* Description with left border accent */}
          <motion.p variants={itemVariants} className="text-gray-300 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-xl border-l-2 border-kasavu-gold/50 pl-6">
            Every thread tells a story of generations of weavers dedicating their lives to the perfection of the Kerala Kasavu.
          </motion.p>
          
          {/* Interactive Button */}
          <motion.div variants={itemVariants}>
            <button className="group flex items-center justify-center space-x-4 bg-white text-kasavu-dark px-8 py-4 uppercase text-xs tracking-widest font-bold hover:bg-kasavu-gold hover:text-white transition-all duration-500 shadow-xl">
              <span>Discover The Process</span>
              <span className="w-8 h-8 rounded-full bg-kasavu-dark/5 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}