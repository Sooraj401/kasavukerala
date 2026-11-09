import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Heart, Loader2, MessageCircle } from 'lucide-react';


export const allProducts = [
  { id: 'POT01', name: 'Borderless Off-White Kerala Cotton Saree with Zari Stripes', price: 842, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/DSC07399_00149fe3-fc54-4789-9ac0-9f5b1dfeea62.jpg?v=1783759717&width=533', badge: '10% OFF' },
  { id: 'POT02', name: 'Cream Plain Kerala Cotton Saree Highlighted by Self-Border', price: 824, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/34B_722bd4f4-68c3-4d03-97cc-d38b54e3becd.jpg?v=1783149349&width=533', badge: 'Sale' },
  { id: 'POT03', name: 'Cream Kerala Cotton Saree Adorned with Pichwai Lotus Print', price: 648, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/PRZ01406.jpg?v=1781934223&width=533', badge: '' },
  { id: 'POT04', name: 'Cream Kerala Cotton Saree Beautified with Hibiscus Motifs', price: 648, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/1-POP-5751-RS-850_11b72e52-e313-4890-a175-d1317a9faebe.jpg?v=1775290495&width=533', badge: 'Bestseller' },
  { id: 'POT05', name: 'Cream Kerala Cotton Saree Accentuated with Checks & Floral Buttas', price: 878, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/25-POP-4250-RS-720.jpg?v=1767955570&width=533', badge: '' },
  { id: 'POT06', name: 'Cream Kerala Cotton Saree with Zari Stripes and Floral Print', price: 1098, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/21-POP-6625-RS-810.jpg?v=1779789578&width=533', badge: 'Trending' },
  { id: 'POT07', name: 'Cream Kerala Cotton Saree Sparkled With Peacock Print', price: 558, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/33B_221b2877-c976-46f6-b4e9-d3a2c9c502ef.jpg?v=1783149292&width=533', badge: 'Sale' },
  { id: 'POT08', name: 'Cream Kerala Cotton Saree with Thread and Zari Buttas', price: 1283, category: 'Premium Saree', img: 'https://www.pothys.com/cdn/shop/files/SaveVid.Net_643439455_18318525412267596_473950487883590707_n.jpg?v=1772803261&width=533', badge: 'Luxury' },
  { id: 'POT09', name: 'Gold Plain Kerala Tissue Cotton Saree with Checked Border', price: 777, category: 'Tissue Sarees', img: 'https://www.pothys.com/cdn/shop/files/20-POP-6624-RS-810.jpg?v=1779789522&width=533', badge: '' },
  { id: 'POT10', name: 'Gold Scandinavian Floral Kerala Cotton Saree', price: 1360, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/6-POP-8371-RS-865.jpg?v=1787055108&width=533', badge: 'New Arrival' },
  { id: 'RAM11', name: 'Women Kora Cotton Cream Embroidered Saree', price: 1590, category: 'Kerala Sarees', img: 'https://www.pothys.com/cdn/shop/files/16-POP-7736-RS.jpg?v=1784630001&width=533', badge: 'Bestseller' },
  { id: 'RAM12', name: 'Girls Art Silk Green with Red Pattu Pavadai', price: 2100, category: 'Pattu Pavadai', img: 'https://www.pothys.com/cdn/shop/files/10-POP-7730-RS-1585---Copy.jpg?v=1784626774&width=533', badge: '' },
  { id: 'RAM13', name: 'Women Tissue Gold Printed Saree', price: 1710, category: 'Kerala Sarees', img: 'https://www.pothys.com/cdn/shop/files/7-POP-7727-RS---Copy.jpg?v=1784621817&width=533', badge: 'Trending' },
  { id: 'RAM14', name: 'Girls Art Silk Sky Blue Pattu Pavadai Set', price: 1800, category: 'Pattu Pavadai', img: 'https://www.pothys.com/cdn/shop/files/DSC03725.jpg?v=1781699231&width=533', badge: 'New' },
  { id: 'POT15', name: 'Handloom Kerala Cotton Saree with Gold Tissue Pallu', price: 1450, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/22-POP-6626-RS-810.jpg?v=1779789640&width=533', badge: '' },
  { id: 'POT16', name: 'Off-White Kasavu Saree with Traditional Temple Border', price: 950, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/25-POP-6856-RS-895---Copy.jpg?v=1780916311&width=533', badge: 'Classic' },
  { id: 'POT17', name: 'Premium Silver Zari Border Kerala Cotton Saree', price: 1120, category: 'Kerala Sarees', img: 'https://www.pothys.com/cdn/shop/files/6-POP-8259-RS-945---Copy.jpg?v=1786452604&width=533', badge: '' },
  { id: 'POT18', name: 'Rose Gold Tissue Kerala Saree with Tassels', price: 1650, category: 'Tissue Sarees', img: 'https://www.pothys.com/cdn/shop/files/DSC07706.jpg?v=1781865186&width=533', badge: 'Premium' },
  { id: 'POT19', name: 'Cream Kasavu Saree with Kathakali Mural Print', price: 1890, category: 'Mural Print', img: 'https://www.pothys.com/cdn/shop/files/5-POP-7385-RS-410-_black.jpg?v=1783938826&width=533', badge: 'Hand-Painted' },
  { id: 'POT20', name: 'Kerala Cotton Set Mundu with 3-Inch Gold Border', price: 1100, category: 'Set Mundu', img: 'https://www.pothys.com/cdn/shop/files/076A0480.jpg?v=1782912539&width=533', badge: '' },
  { id: 'POT21', name: 'Pure Cotton Set Saree with Green and Gold Kara', price: 850, category: 'Set Saree', img: 'https://www.pothys.com/cdn/shop/files/11-POP-6689-RS-720---Copy.jpg?v=1779975995&width=533', badge: 'Sale' },
  { id: 'POT22', name: 'Kerala Kasavu Double Mundu for Men', price: 920, category: 'Men\'s Wear', img: 'https://www.pothys.com/cdn/shop/files/PRZ02369---Copy.jpg?v=1782548205&width=533', badge: '' },
  { id: 'POT23', name: 'Copper Zari Woven Kasavu Cotton Saree', price: 1050, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/7-POP-5001-RS-680---Copy.jpg?v=1771938769&width=533', badge: 'Unique' },
  { id: 'POT24', name: 'Hand-painted Radha Krishna Mural Kasavu Saree', price: 2400, category: 'Mural Print', img: 'https://www.pothys.com/cdn/shop/files/1-POP-6111-RS-735---Copy_56fe680b-34df-48fc-946f-542addd1e6f6.jpg?v=1777286945&width=533', badge: 'Luxury' },
  { id: 'POT25', name: 'Off-White Cotton Saree with Maroon Block Prints', price: 780, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/5-POP-6694-RS-1895---Copy---Copy.jpg?v=1780124837&width=533', badge: '' },
  { id: 'POT26', name: 'Gold Tissue Saree with Red Thread Embroidery', price: 1950, category: 'Tissue Sarees', img: 'https://www.pothys.com/cdn/shop/files/36-POP-6508-RS-415.jpg?v=1779186549&width=533', badge: 'Wedding' },
  { id: 'POT27', name: 'Kerala Cotton Saree with Intricate Mango Motifs', price: 1200, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/5-POP-8258-RS-1060.jpg?v=1786452546&width=533', badge: '' },
  { id: 'POT28', name: 'Lavender Tissue Kasavu Saree with Silver Border', price: 1750, category: 'Tissue Sarees', img: 'https://www.pothys.com/cdn/shop/files/2-POP-7072-RS-360.jpg?v=1781609791&width=533', badge: 'Trending' },
  { id: 'RAM29', name: 'Girls Yellow and Pink Traditional Pattu Pavadai', price: 1600, category: 'Pattu Pavadai', img: 'https://www.pothys.com/cdn/shop/files/35B_ddcd7529-68e3-4755-a4ed-17526a60b2c2.jpg?v=1783149541&width=533', badge: '' },
  { id: 'POT30', name: 'Classic Kerala Saree with 5-Inch Gold Kasavu Border', price: 1300, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/3-POP-7960-RS-710.jpg?v=1785922634&width=533', badge: 'Bestseller' },
  { id: 'POT31', name: 'Cream Saree with Woven Peacock Jacquard', price: 1450, category: 'Premium Saree', img: 'https://www.pothys.com/cdn/shop/files/076A0094.jpg?v=1782912676&width=533', badge: '' },
  { id: 'POT32', name: 'Off-White Kora Saree with Geometric Zari Patterns', price: 1150, category: 'Kerala Sarees', img: 'https://www.pothys.com/cdn/shop/files/9-POP-7729-RS-1585---Copy.jpg?v=1784626728&width=533', badge: 'Modern' },
  { id: 'POT33', name: 'Set Saree with Blue Threadwork Border', price: 890, category: 'Set Saree', img: 'https://www.pothys.com/cdn/shop/files/PRZ01681.jpg?v=1781939351&width=533', badge: '' },
  { id: 'POT34', name: 'Golden Tissue Set Mundu with Floral Embroidery', price: 1550, category: 'Set Mundu', img: 'https://www.pothys.com/cdn/shop/files/22-POP-4247-RS-720.jpg?v=1767954796&width=533', badge: 'Festive' },
  { id: 'POT35', name: 'Kerala Saree with Green Leaf Block Print', price: 720, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/22-POP-4973-RS-345---Copy.jpg?v=1771673601&width=533', badge: '' },
  { id: 'POT36', name: 'Pure Cotton Kasavu Saree with Red Temple Border', price: 980, category: 'Kerala Cotton', img: 'https://www.pothys.com/cdn/shop/files/14-POP-5902-RS-1095---Copy_32e2a953-8c18-471e-a9a0-8e8bfa6777b5.jpg?v=1775895600&width=533', badge: 'Classic' },
  { id: 'RAM37', name: 'Girls Maroon and Gold Tissue Pattu Pavadai', price: 1850, category: 'Pattu Pavadai', img: 'https://www.pothys.com/cdn/shop/files/076A3335.jpg?v=1785160031&width=533', badge: '' },
  { id: 'POT38', name: 'Silver Tissue Kerala Saree with Mirror Work', price: 2100, category: 'Tissue Sarees', img: 'https://www.pothys.com/cdn/shop/files/PRZ08744.jpg?v=1772894132&width=533', badge: 'Wedding' },
  { id: 'POT39', name: 'Cream Cotton Saree with Golden Coin Buttas', price: 1100, category: 'Cotton Sarees', img: 'https://www.pothys.com/cdn/shop/files/PRZ08710.jpg?v=1779091027&width=533', badge: '' },
  { id: 'POT40', name: 'Premium Handloom Kasavu Saree with Extra Wide Border', price: 2800, category: 'Premium Saree', img: 'https://www.pothys.com/cdn/shop/files/11-POP-7322-RS-570-_black.jpg?v=1782729952&width=533', badge: 'Luxury' }
];

export default function ProductGrid() {
const itemsPerRow = 4;
  const initialRows = 2;
  const itemsToLoad = itemsPerRow * initialRows; 

  const [visibleCount, setVisibleCount] = useState(itemsToLoad);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + itemsToLoad);
      setIsLoading(false);
    }, 600); 
  };

  const handleWhatsAppEnquiry = (product) => {
    const phoneNumber = "918940809388"; 
    
    const imageLink = `${window.location.origin}/?product=${product.id}`;
    
    const message = `Hi Kasavu Kerala, I would like to enquire about this product:\n\n*Product Name:* ${product.name}\n*Price:* ₹${product.price.toLocaleString('en-IN')}\n*Product ID:* ${product.id}\n*View Image:* ${imageLink}\n\nCould you share more details?`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
<section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-kasavu-cream">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-kasavu-dark">Latest Collections</h2>
          <div className="w-20 h-1 bg-kasavu-gold rounded-full"></div>
          <p className="mt-4 text-sm text-gray-500 font-medium">
            Showing {Math.min(visibleCount, allProducts.length)} of {allProducts.length} authentic products
          </p>
        </div>
        <button className="group flex items-center space-x-2 uppercase tracking-widest text-xs font-semibold text-kasavu-dark hover:text-kasavu-gold mt-6 md:mt-0 transition-colors">
          <span>Shop All</span>
          <span className="block transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Modern Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {allProducts.slice(0, visibleCount).map((item, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: (index % itemsToLoad) * 0.1, duration: 0.5, ease: "easeOut" }}
              key={item.id} 
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-4/5 bg-gray-50">
                
                {item.badge && (
                  <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-kasavu-dark rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
                
                <span className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all cursor-pointer shadow-sm">
                  <Heart size={18} strokeWidth={2} />
                </span>

                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                  loading="lazy"
                />
                
                {/* Hover Quick Actions (Updated for WhatsApp) */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-20 flex space-x-2">
                  <button 
                    onClick={() => handleWhatsAppEnquiry(item)}
                    className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl flex justify-center items-center space-x-2 text-[11px] font-bold uppercase tracking-wider hover:bg-[#128C7E] transition-colors shadow-lg"
                  >
                    <MessageCircle size={16} />
                    <span>Enquire</span>
                  </button>
                  <button className="bg-white text-kasavu-dark p-3.5 rounded-xl hover:bg-kasavu-gold hover:text-white transition-colors shadow-lg shrink-0">
                    <Eye size={18} />
                  </button>
                </div>
                
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col grow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-kasavu-gold mb-2">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-4 group-hover:text-kasavu-gold transition-colors line-clamp-2">
                  {item.name}
                </h3>
                
                {/* Price Display */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <p className="text-lg font-serif font-bold text-kasavu-dark">
                    ₹{item.price.toLocaleString('en-IN', {minimumFractionDigits: 2})}
                  </p>
                  <p className="text-xs font-medium text-gray-400 line-through">
                    ₹{(item.price * 1.15).toLocaleString('en-IN', {minimumFractionDigits: 2})}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress & Pagination Controls */}
      {visibleCount < allProducts.length && (
        <div className="mt-16 flex flex-col items-center justify-center space-y-5">
          <button 
            onClick={handleLoadMore}
            disabled={isLoading}
            className="flex items-center space-x-3 px-10 py-4 bg-transparent border-2 border-kasavu-dark text-kasavu-dark rounded-full uppercase text-xs tracking-widest font-bold hover:bg-kasavu-dark hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Loading Products...</span>
              </>
            ) : (
              <span>Load Next 2 Rows</span>
            )}
          </button>
          
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-kasavu-gold transition-all duration-500 ease-out"
              style={{ width: `${(visibleCount / allProducts.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </section>
  );
}