import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Send, Star, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, e: React.MouseEvent<HTMLButtonElement>) => void;
  onDirectBuy: (product: Product, e: React.MouseEvent<HTMLButtonElement>) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onDirectBuy,
  onViewDetails,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[32px] p-3.5 flex flex-col h-full shadow-[0_12px_40px_rgba(255,183,197,0.12)] hover:shadow-[0_20px_50px_rgba(255,183,197,0.22)] border border-[#FFF1F5] cursor-pointer transition-all duration-300"
      onClick={() => onViewDetails(product)}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF0F3] rounded-[24px] mb-4">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-sakura-500 font-serif italic font-bold text-[10px] tracking-wider px-3 py-1 rounded-full shadow-sm border border-sakura-100/50">
            {product.badge}
          </span>
        )}

        {/* Rating overlay */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#5D4037] text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm border border-sakura-100/20 flex items-center gap-1">
          <Star size={10} className="fill-amber-400 stroke-none" />
          <span>{product.rating || 5.0}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-1 flex flex-col flex-grow">
        {/* Categories */}
        <span className="text-[9px] font-bold text-sakura-400 tracking-widest uppercase mb-1">
          {product.categories.slice(0, 2).join(' • ')}
        </span>

        {/* Title */}
        <h3 className="font-serif font-bold text-[#5D4037] text-base leading-snug mb-1 group-hover:text-sakura-500 transition-colors">
          {product.name}
        </h3>

        {/* Brief description */}
        <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price Tag */}
        <div className="mt-auto flex items-baseline justify-between mb-4">
          <span className="text-[10px] text-stone-400 font-medium">Precio</span>
          <span className="font-serif font-bold text-lg text-sakura-500 group-hover:text-sakura-600 transition-colors">
            ${product.price.toLocaleString('es-AR')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => onAddToCart(product, e)}
            className="flex items-center justify-center gap-1.5 bg-[#FFF0F3] hover:bg-sakura-100/40 text-sakura-500 text-[11px] font-semibold py-2 px-2 rounded-full border border-sakura-200/20 active:scale-95 transition-all duration-200 cursor-pointer"
            title="Agregar al Carrito"
          >
            <ShoppingCart size={12} />
            <span>Al Carrito</span>
          </button>

          <button
            onClick={(e) => onDirectBuy(product, e)}
            className="flex items-center justify-center gap-1.5 bg-sakura-500 hover:bg-sakura-600 text-white text-[11px] font-semibold py-2 px-2 rounded-full active:scale-95 shadow-sm shadow-sakura-100 transition-all duration-200 cursor-pointer"
            title="Comprar por WhatsApp"
          >
            <Send size={11} />
            <span>Comprar Ya</span>
          </button>
        </div>

        {/* View more micro-indicator */}
        <div className="flex items-center gap-1 text-[10px] font-semibold text-stone-400 group-hover:text-sakura-400 mt-3 pt-3 border-t border-stone-50 transition-colors">
          <span>Ver detalles completos</span>
          <ArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
