import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { 
    id: 1, 
    name: "Aswathi Nambiar", 
    role: "Thrissur", 
    text: "The wedding tissue kasavu I ordered is absolutely breathtaking. You can truly feel the authenticity of the handloom work. Worth every penny.",
    initial: "A"
  },
  { 
    id: 2, 
    name: "Sreejith P.K.", 
    role: "Kozhikode", 
    text: "Bought the double mundu with copper zari for Vishu. Premium packaging and the fabric quality is top-notch. It has that authentic Kerala touch.",
    initial: "S"
  },
  { 
    id: 3, 
    name: "Lakshmi Menon", 
    role: "Kochi", 
    text: "I was skeptical about buying Kasavu online, but the quality of the set saree is beyond amazing. The gold zari has a beautiful traditional sheen.",
    initial: "L"
  },
  { 
    id: 4, 
    name: "Rahul Varghese", 
    role: "Dubai, UAE", 
    text: "Ordered traditional wear for our association's Onam event. Fast international shipping and the material feels phenomenal. Highly recommend Kasavu Kerala.",
    initial: "R"
  },
  { 
    id: 5, 
    name: "Priya Radhakrishnan", 
    role: "Bangalore", 
    text: "Wore the hand-painted mural saree for my housewarming. It is incredibly lightweight, easy to drape, and looks stunning. Pure elegance.",
    initial: "P"
  },
  { 
    id: 6, 
    name: "Anjali Devi", 
    role: "Palakkad", 
    text: "The silver kara kasavu is a work of art. Received so many compliments from my relatives. Thank you for preserving our weavers' heritage.",
    initial: "A"
  }
];

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // കറൗസലിൽ ഹോവർ ചെയ്യുമ്പോൾ സ്ക്രോൾ നിർത്താൻ
  const scrollRef = useRef(null);

  // Auto-scroll Logic (ഓട്ടോമാറ്റിക്കായി സ്ക്രോൾ ചെയ്യാൻ)
  useEffect(() => {
    if (isHovered) return; // മൗസ് മുകളിൽ ഉള്ളപ്പോൾ സ്ക്രോൾ ആകില്ല

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // ഒരു കാർഡിന്റെ വീതിയും അതിനിടയിലുള്ള ഗ്യാപ്പും (gap-6 = 24px) കണക്കാക്കുന്നു
        const cardWidth = scrollRef.current.children[0].offsetWidth + 24; 

        // അവസാനം എത്തിയാൽ തിരിച്ച് ആദ്യം മുതൽ തുടങ്ങാൻ
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3500); // ഓരോ 3.5 സെക്കൻഡിലും അടുത്ത കാർഡിലേക്ക് മാറും (വളരെ സ്മൂത്ത് ആയി)

    return () => clearInterval(interval);
  }, [isHovered]);

  // മാനുവൽ ബട്ടൺ കൺട്രോൾ
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 24;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -cardWidth : cardWidth, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-kasavu-cream px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-kasavu-dark">Client Diaries</h2>
            <div className="w-20 h-1 bg-kasavu-gold mb-6"></div>
            <p className="text-gray-500 max-w-xl text-sm md:text-base font-medium">
              Hear what our beloved customers from across the globe have to say about their Kasavu Kerala experience.
            </p>
          </motion.div>

          {/* Desktop Manual Controls */}
          <div className="hidden md:flex space-x-3 pb-2">
            <button 
              onClick={() => handleScroll('left')} 
              className="p-3 rounded-full bg-white border border-gray-200 text-kasavu-dark hover:border-kasavu-gold hover:text-kasavu-gold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleScroll('right')} 
              className="p-3 rounded-full bg-white border border-gray-200 text-kasavu-dark hover:border-kasavu-gold hover:text-kasavu-gold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel / Slider Area */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 
            hide-scrollbar പ്ലഗ്ഗിൻ ഇല്ലാതെ തന്നെ സ്ക്രോൾ ബാർ ഹൈഡ് ചെയ്യാൻ 
            [&::-webkit-scrollbar]:hidden ഉപയോഗിച്ചിരിക്കുന്നു 
          */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-8 pt-4 px-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
              <motion.div 
                key={review.id}
                // Responsive Width: Mobile=100%, Tablet=50%, Desktop=33.3%
                className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] relative bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-300 cursor-grab active:cursor-grabbing"
                animate={{ 
                  opacity: hoveredCard === null || hoveredCard === i ? 1 : 0.4,
                  scale: hoveredCard === i ? 1.03 : 1,
                  y: hoveredCard === i ? -8 : 0,
                  boxShadow: hoveredCard === i ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Elegant Gold Quote Icon */}
                <div className="absolute right-6 top-6 opacity-20 text-kasavu-gold pointer-events-none">
                  <Quote size={40} className="fill-current" />
                </div>

                {/* User Info Header */}
                <div className="flex items-center space-x-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-serif text-xl font-bold bg-kasavu-cream text-kasavu-dark border border-gray-100">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold leading-none text-kasavu-dark mb-1">{review.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-kasavu-gold">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex space-x-1 text-kasavu-gold mb-5 relative z-10">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" strokeWidth={1} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed text-gray-600 relative z-10">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Manual Controls (ഫോണിൽ താഴെ കാണിക്കാൻ) */}
        <div className="flex md:hidden justify-center space-x-4 mt-4">
          <button 
            onClick={() => handleScroll('left')} 
            className="p-3 rounded-full bg-white border border-gray-200 text-kasavu-dark hover:border-kasavu-gold hover:text-kasavu-gold transition-colors shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => handleScroll('right')} 
            className="p-3 rounded-full bg-white border border-gray-200 text-kasavu-dark hover:border-kasavu-gold hover:text-kasavu-gold transition-colors shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}