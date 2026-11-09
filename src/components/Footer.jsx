import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-kasavu-dark text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      {/* 3 Columns Layout: Brand -> Quick Links -> Contact Us */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand Section */}
        <div>
          <div className="flex flex-col mb-6 cursor-default">
            <h2 className="font-serif text-3xl font-bold tracking-[0.15em] leading-none text-white">
              KASAVU<span className="text-kasavu-gold">.</span>
            </h2>
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase font-semibold mt-1 text-gray-400">
              Kerala
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Elevating everyday elegance with authentic, hand-woven Kerala attire. Experience the perfect blend of tradition and contemporary style.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-6 text-kasavu-gold">Quick Links</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Shop Collection</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
          </ul>
        </div>

        {/* Contact Us Section - Moved to the last column in place of Newsletter */}
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-6 text-kasavu-gold">Contact Us</h3>
          <ul className="space-y-5 text-gray-400 text-sm">
            
            {/* Address with Google Maps Link */}
            <li className="flex items-start space-x-3 group">
              <MapPin size={18} className="shrink-0 mt-0.5 group-hover:text-kasavu-gold transition-colors" />
              <a 
                href="https://maps.google.com/?q=KASAVU+KERALA,+Pazhayannur-Lakkidi+Road,+Near+Hp+petrol+pump,+Thiruvilwamala,+Thrissur,+680588" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors leading-relaxed"
              >
                KASAVU KERALA<br />
                Pazhayannur-Lakkidi Road<br />
                Near Hp petrol pump<br />
                Thiruvilwamala, Thrissur PO<br />
                680588
              </a>
            </li>

            {/* Email Link */}
            <li className="flex items-center space-x-3 group">
              <Mail size={18} className="shrink-0 group-hover:text-kasavu-gold transition-colors" />
              <a href="mailto:kasavukerala.ind@gmail.com" className="hover:text-white transition-colors">
                kasavukerala.ind@gmail.com
              </a>
            </li>

            {/* Phone Numbers */}
            <li className="flex flex-col space-y-3 pt-1">
              {/* WhatsApp Link for first number */}
              <a 
                href="https://wa.me/918940809388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group hover:text-white transition-colors"
              >
                <MessageCircle size={18} className="shrink-0 group-hover:text-[#25D366] transition-colors" />
                <span>+91 89408 09388</span>
              </a>
              
              {/* Standard Tel link for second number */}
              <a 
                href="tel:+917034846077" 
                className="flex items-center space-x-3 group hover:text-white transition-colors"
              >
                <Phone size={18} className="shrink-0 group-hover:text-kasavu-gold transition-colors" />
                <span>+91 70348 46077</span>
              </a>
            </li>
            
          </ul>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 text-center text-gray-500 text-xs uppercase tracking-widest">
        <p>&copy; 2026 Kasavu Kerala. All Rights Reserved.</p>
      </div>
    </footer>
  );
}