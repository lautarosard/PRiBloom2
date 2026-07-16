import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Check, HelpCircle, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onDirectBuy: (product: Product, quantity: number) => void;
}

import { useState, useEffect } from 'react';

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  onDirectBuy,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-4xl bg-[#FFF9FB] rounded-[36px] overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row p-2 border border-[#FFF1F5]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md text-stone-700 hover:text-sakura-500 hover:scale-110 p-2.5 rounded-full shadow-md border border-sakura-100/20 transition-all duration-200 cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X size={18} />
          </button>

          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] bg-[#FFF0F3] relative overflow-hidden flex items-center justify-center rounded-[28px]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-sakura-500 text-white font-serif italic text-xs tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right Column: Information */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
            <div className="mb-2">
              <span className="text-xs font-serif italic font-bold tracking-wider text-sakura-500 bg-[#FFF0F3] px-3 py-1 rounded-full border border-sakura-200/20">
                {product.categories.join(' • ')}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-light text-[#5D4037] mb-2 leading-tight">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-4">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 fill-current ${
                      i < Math.floor(product.rating || 5) ? 'text-amber-400' : 'text-stone-200'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-stone-500 font-medium">
                {product.rating || 5.0} (Clientes felices)
              </span>
            </div>

            <div className="text-3xl font-serif font-bold text-sakura-500 mb-5">
              ${product.price.toLocaleString('es-AR')}
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
              {product.description}
            </p>

            {/* Specifications Card */}
            {product.specs && (
              <div className="bg-white rounded-[24px] p-5 border border-[#FFF1F5] shadow-[0_8px_25px_rgba(255,183,197,0.05)] mb-6 text-xs text-stone-600 space-y-2.5">
                <h4 className="font-serif font-bold text-[#5D4037] flex items-center gap-1.5 pb-1 border-b border-stone-50">
                  <HelpCircle size={14} className="text-sakura-400" /> Detalles del Producto
                </h4>
                {product.specs.material && (
                  <div className="flex justify-between border-b border-stone-50 pb-1.5">
                    <span className="text-stone-400 font-medium">Material</span>
                    <span className="text-[#5D4037] font-semibold text-right">{product.specs.material}</span>
                  </div>
                )}
                {product.specs.dimensions && (
                  <div className="flex justify-between border-b border-stone-50 pb-1.5">
                    <span className="text-stone-400 font-medium">Dimensiones</span>
                    <span className="text-[#5D4037] font-semibold text-right">{product.specs.dimensions}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-stone-50 pb-1.5">
                  <span className="text-stone-400 font-medium">Personalizable</span>
                  <span className={`font-semibold ${product.specs.customizable ? 'text-emerald-600' : 'text-stone-500'}`}>
                    {product.specs.customizable ? 'Sí, a tu gusto! 🎨' : 'Estándar'}
                  </span>
                </div>
                {product.specs.demora && (
                  <div className="flex justify-between pt-0.5">
                    <span className="text-stone-400 font-medium">Tiempo de Elaboración</span>
                    <span className="text-sakura-500 font-semibold flex items-center gap-1">
                      <AlertCircle size={12} /> {product.specs.demora}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="mt-auto space-y-4 pt-4 border-t border-[#FFF1F5]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#5D4037]">Cantidad:</span>
                <div className="flex items-center gap-2 border border-[#FFF1F5] bg-white rounded-full px-3 py-1.5 shadow-sm">
                  <button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(q => q - 1)}
                    className="text-stone-400 hover:text-sakura-500 disabled:opacity-30 p-1 hover:bg-sakura-50 rounded-full transition-colors cursor-pointer"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center font-serif font-bold text-[#5D4037]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-stone-400 hover:text-sakura-500 p-1 hover:bg-sakura-50 rounded-full transition-colors cursor-pointer"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Purchase Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider rounded-full px-4 py-3.5 border transition-all duration-300 shadow-sm cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      : 'bg-[#FFF0F3] text-sakura-500 border-sakura-200/30 hover:bg-sakura-100/40'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check size={16} /> ¡Agregado!
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} /> Al Carrito
                    </>
                  )}
                </button>

                <button
                  onClick={() => onDirectBuy(product, quantity)}
                  className="flex items-center justify-center gap-2 bg-sakura-500 hover:bg-sakura-600 text-white text-xs font-bold uppercase tracking-wider rounded-full px-4 py-3.5 shadow-lg shadow-sakura-100/50 transition-all duration-300 cursor-pointer"
                >
                  Comprar Ya
                </button>
              </div>

              {/* Informative notice about WhatsApp redirect */}
              <p className="text-[10px] text-center text-stone-400 italic">
                Al presionar "Comprar Ya", abrirás WhatsApp para coordinar los detalles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
