import { ShieldCheck, Leaf, Sparkles, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Leaf, title: '100% Pure Cotton', desc: 'Breathable, skin-friendly fabrics' },
  { icon: Sparkles, title: 'Real Gold Saree', desc: 'Authentic metallic threadwork' },
  { icon: ShieldCheck, title: 'Artisan Crafted', desc: 'Handwoven by Kerala masters' },
  { icon: Truck, title: 'ALL INDIA SHIPPING', desc: 'Delivered securely to your door' },
];

export default function Features() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-kasavu-cream rounded-full text-kasavu-gold">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-kasavu-dark uppercase tracking-wider text-sm mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}