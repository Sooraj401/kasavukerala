export default function Footer() {
  return (
    <footer id="contact" className="bg-kasavu-dark text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-6 text-kasavu-gold">Quick Links</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Shop Collection</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-sm mb-6 text-kasavu-gold">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent border-b border-gray-600 text-white px-2 py-2 w-full focus:outline-none focus:border-kasavu-gold transition-colors"
            />
            <button className="uppercase text-sm tracking-widest ml-4 hover:text-kasavu-gold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 text-center text-gray-500 text-xs uppercase tracking-widest">
        <p>&copy; 2026 Kasavu Brand. All Rights Reserved.</p>
      </div>
    </footer>
  );
}