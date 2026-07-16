import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowUp, Send, Star, Search, Filter, MessageCircle, Heart, Sparkles, Check } from 'lucide-react';

import { Product, CartItem, CategoryType } from './types';
import { products, CATEGORIES } from './data';

import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import AboutSection from './components/AboutSection';
import CherryBlossoms from './components/CherryBlossoms';
import FloralCorner from './components/FloralCorner';

export default function App() {
  // Cart state with localStorage persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('printbloom_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // UI States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('printbloom_cart', JSON.stringify(cart));
  }, [cart]);

  // Scroll visibility for 'Back to top' button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Trigger toast notification
    setActiveNotification(`¡Agregado al carrito: ${product.name}! 🌸`);
    setTimeout(() => {
      setActiveNotification(null);
    }, 2500);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Direct checkout via WhatsApp (one product only)
  const handleDirectBuy = (product: Product, quantity: number = 1) => {
    const phone = '5491134092802';
    const message = `¡Hola PrintBloom! 🌸 Quisiera consultar por el siguiente producto personalizado:\n\n• *${product.name}* x${quantity} ($${product.price.toLocaleString('es-AR')} c/u)\n\n¿Podrían pasarme el precio final y coordinar el pedido? ¡Muchas gracias! 💕`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  // Scroll helpers
  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('sobre-nosotros');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter & Sort Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Todas' ||
      product.categories.includes(selectedCategory);
    
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'featured':
      default:
        // Featured products first, then alphabetically
        const aFeatured = a.isFeatured ? 1 : 0;
        const bFeatured = b.isFeatured ? 1 : 0;
        return bFeatured - aFeatured || a.name.localeCompare(b.name);
    }
  });

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col selection:bg-sakura-200 selection:text-sakura-800 relative bg-stone-50/30">
      
      {/* Gentle Floating Cherry Blossom Petal Animation */}
      <CherryBlossoms />

      {/* Main Header / Navigation */}
      <Header
        cartCount={cartTotalItems}
        onCartClick={() => setIsCartOpen(true)}
        onAboutClick={scrollToAbout}
        onCatalogClick={scrollToCatalog}
      />

      {/* Main Hero Banner with mockup displays */}
      <Hero onExploreClick={scrollToCatalog} />

      {/* Features Showcase bar */}
      <section className="py-6 bg-white border-y border-stone-100 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 text-xs font-semibold text-stone-600">
            <div className="flex items-center gap-2">
              <span className="text-sakura-400 text-lg">🖨️</span>
              <span>Impresiones 3D con Filamento Eco PLA</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-stone-200" />
            <div className="flex items-center gap-2">
              <span className="text-sakura-400 text-lg">📖</span>
              <span>Encuadernación 100% de Autor</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-stone-200" />
            <div className="flex items-center gap-2">
              <span className="text-sakura-400 text-lg">🌸</span>
              <span>Estética Japonesa & Kawaii Elegante</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-stone-200" />
            <div className="flex items-center gap-2">
              <span className="text-sakura-400 text-lg">💬</span>
              <span>Asesoramiento y Compra por WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <main id="catalogo" className="py-20 relative z-10 scroll-mt-16">
        <FloralCorner position="top-right" className="text-sakura-100" />

        <div className="container mx-auto px-6 max-w-7xl space-y-12">
          
          {/* Header Title with decorative Sakura */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase text-sakura-400 tracking-widest">
              <span>Nuestras Creaciones</span>
              <Sparkles size={12} className="animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-stone-800 tracking-tight flex items-center justify-center gap-2">
              🌸 Catálogo Exclusivo 🌸
            </h2>
            <p className="text-stone-500 text-sm font-light">
              Filtra por nuestras categorías artesanales y encontrá ese regalo único o accesorio perfecto para organizar tu vida.
            </p>
          </div>

          {/* Filtering and Search Area */}
          <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-6">
            
            {/* Search Input and Sorting Select */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              
              {/* Search */}
              <div className="relative flex-grow max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Buscar agenda, mate, llavero..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 focus:bg-white rounded-2xl outline-none focus:ring-1 focus:ring-sakura-300 focus:border-sakura-300 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Sorting */}
              <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
                <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                  <Filter size={13} /> Ordenar por:
                </span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="text-xs font-semibold text-stone-700 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 outline-none focus:ring-1 focus:ring-sakura-300 transition-all cursor-pointer"
                >
                  <option value="featured">🌸 Destacados primero</option>
                  <option value="price-asc">💸 Menor Precio</option>
                  <option value="price-desc">💰 Mayor Precio</option>
                  <option value="rating">⭐ Mejor Calificados</option>
                </select>
              </div>

            </div>

            {/* Category Pills (Dynamic Horizontal scroll for mobile) */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-600">Categorías:</span>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES.map((category) => {
                  const isSelected = selectedCategory === category.name;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name as CategoryType)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-sakura-400 to-sakura-500 text-white shadow-md shadow-sakura-100 scale-102'
                          : 'bg-stone-50 hover:bg-sakura-50/50 text-stone-600 hover:text-sakura-500 border border-stone-200/40'
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Product Cards Layout - Staggered beautiful grid */}
          <AnimatePresence mode="popLayout">
            {sortedProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-white p-16 rounded-3xl border border-stone-100 text-center space-y-4 shadow-sm"
              >
                <span className="text-4xl">🌸</span>
                <h3 className="font-display font-bold text-stone-700 text-lg">No encontramos productos</h3>
                <p className="text-stone-400 text-xs max-w-sm mx-auto">
                  Probá buscando otra palabra clave o cambiando el filtro de categorías para descubrir todas nuestras creaciones.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todas');
                    setSearchQuery('');
                  }}
                  className="bg-sakura-50 hover:bg-sakura-100 text-sakura-500 font-display font-semibold text-xs py-2.5 px-6 rounded-2xl transition-colors"
                >
                  Ver todo el catálogo
                </button>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={(p, e) => {
                      e.stopPropagation();
                      handleAddToCart(p);
                    }}
                    onDirectBuy={(p, e) => {
                      e.stopPropagation();
                      handleDirectBuy(p);
                    }}
                    onViewDetails={(p) => setSelectedProduct(p)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick numbers indicator */}
          {sortedProducts.length > 0 && (
            <p className="text-center text-[11px] text-stone-400 font-medium">
              Mostrando {sortedProducts.length} producto{sortedProducts.length > 1 ? 's' : ''} personalizados • PrintBloom 🌸
            </p>
          )}

        </div>
      </main>

      {/* Decorative floral details between sections */}
      <div className="relative py-8 bg-stone-50">
        <div className="w-16 h-0.5 bg-sakura-200/50 mx-auto rounded-full" />
      </div>

      {/* About Section and footer details */}
      <AboutSection />

      {/* Rich Product Details Modal Dialog */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, q) => handleAddToCart(p, q)}
        onDirectBuy={(p, q) => handleDirectBuy(p, q)}
      />

      {/* Sliding Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* FLOATING ACTIONS */}

      {/* Floating Action WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        
        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white/90 backdrop-blur-md text-stone-700 hover:text-sakura-500 border border-stone-200 hover:border-sakura-300 p-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
              title="Volver Arriba"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Primary Floating WhatsApp */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.open('https://wa.me/5491134092802?text=¡Hola!%20Quiero%20hacerles%20una%20consulta%20por%20sus%20productos%20personalizados%20🌸', '_blank', 'noopener,noreferrer');
          }}
          className="relative flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-white/40"
          title="Consúltanos por WhatsApp"
        >
          {/* Pulse notification circle */}
          <span className="absolute inset-0 rounded-full bg-emerald-400/30 scale-110 animate-ping -z-10" />

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 2.01 14.12 1.01 11.492 1.01c-5.442 0-9.866 4.372-9.87 9.802 0 1.63.45 3.21 1.302 4.615L1.879 21.03l5.068-1.31c.005.002.005.002.005-.002z" />
          </svg>

          {/* Quick tooltip pop-out on hover */}
          <span className="absolute right-16 bg-stone-900 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-md">
            ¿Tenés dudas? Chateemos! 💬
          </span>
        </motion.button>
      </div>

      {/* POPUP CART NOTIFICATION */}
      <AnimatePresence>
        {activeNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-50 bg-stone-900 text-white py-3.5 px-6 rounded-2xl shadow-xl flex items-center gap-3 border border-stone-800 text-xs font-semibold whitespace-nowrap"
          >
            <div className="bg-sakura-500 p-1 rounded-full text-white">
              <Check size={14} />
            </div>
            <span>{activeNotification}</span>
            <button
              onClick={() => {
                setIsCartOpen(true);
                setActiveNotification(null);
              }}
              className="text-sakura-300 hover:text-sakura-200 underline pl-2"
            >
              Ver Carrito
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
