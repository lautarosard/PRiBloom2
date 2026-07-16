import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onAboutClick: () => void;
  onCatalogClick: () => void;
}

export default function Header({
  cartCount,
  onCartClick,
  onAboutClick,
  onCatalogClick,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInstagram = () => {
    window.open('https://instagram.com', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/5491134092802', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-stone-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer select-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-2xl font-serif italic font-bold text-sakura-500">PrintBloom</span>
            <div className="w-1.5 h-1.5 rounded-full bg-sakura-200"></div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
            <button
              onClick={onCatalogClick}
              className="text-stone-600 hover:text-sakura-500 pb-1 border-b border-transparent hover:border-sakura-500 transition-all cursor-pointer"
            >
              Catálogo
            </button>
            <button
              onClick={onAboutClick}
              className="text-stone-600 hover:text-sakura-500 pb-1 border-b border-transparent hover:border-sakura-500 transition-all cursor-pointer"
            >
              Sobre Nosotros
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            
            {/* Instagram Social */}
            <button
              onClick={handleInstagram}
              className="hidden md:flex text-stone-400 hover:text-sakura-500 p-2 rounded-xl hover:bg-sakura-50/50 transition-colors cursor-pointer"
              title="Seguinos en Instagram"
            >
              <Instagram size={18} />
            </button>

            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 bg-sakura-50/60 hover:bg-sakura-100/80 text-sakura-500 rounded-2xl transition-all duration-300 hover:scale-105 shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
              title="Ver mi carrito"
            >
              <ShoppingBag size={18} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-sakura-400 to-sakura-500 text-white font-display font-bold text-[9px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Quick Contact Button */}
            <button
              onClick={handleWhatsAppDirect}
              className="hidden lg:flex items-center gap-1.5 bg-stone-900 hover:bg-sakura-500 text-white font-display font-semibold text-xs py-2 px-4 rounded-xl transition-all duration-300 shadow-sm"
            >
              <Heart size={12} className="fill-current animate-pulse" />
              <span>Coordinar Pedido</span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-stone-600 hover:text-sakura-500 p-1.5 rounded-xl transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] bg-white border-b border-stone-100 shadow-xl z-30 py-6 px-6 md:hidden flex flex-col gap-4"
          >
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onCatalogClick();
              }}
              className="w-full text-left font-display font-bold text-stone-700 hover:text-sakura-500 text-base py-2.5 border-b border-stone-50"
            >
              🌸 Ver Catálogo
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onAboutClick();
              }}
              className="w-full text-left font-display font-bold text-stone-700 hover:text-sakura-500 text-base py-2.5 border-b border-stone-50"
            >
              🌸 Sobre PrintBloom
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full text-center bg-gradient-to-r from-sakura-400 to-sakura-500 text-white font-display font-semibold py-3 rounded-xl shadow-sm text-sm"
            >
              Chatear por WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
