import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { id: 1, name: "Anjali Menon", role: "Kerala", text: "The quality of the set saree is beyond amazing. The gold zari has a beautiful authentic sheen that you only get from pure handloom." },
  { id: 2, name: "Priya Sharma", role: "Mumbai", text: "Wore the Kasavu saree for my housewarming. It is incredibly lightweight, comfortable, and absolutely stunning." },
  { id: 3, name: "Rahul V.", role: "Dubai", text: "Ordered the silver kara mundu. The packaging was premium and the fabric feels phenomenal. Highly recommend Kasavu." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-kasavu-dark">Client Diaries</h2>
          <div className="w-16 h-0.5 bg-kasavu-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              key={review.id} 
              className="bg-kasavu-cream p-8 md:p-10 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex space-x-1 text-kasavu-gold mb-6">
                {[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-serif text-lg text-kasavu-dark">{review.name}</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}