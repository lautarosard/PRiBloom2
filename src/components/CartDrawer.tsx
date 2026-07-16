import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, MessageSquare, AlertTriangle } from 'lucide-react';
import { CartItem } from '../types';
import { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [note, setNote] = useState('');

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    const phone = '5491134092802';
    let message = '¡Hola PrintBloom! 🌸 Quisiera consultar por estos productos personalizados:\n\n';

    items.forEach((item) => {
      message += `• *${item.product.name}* x${item.quantity} ($${item.product.price.toLocaleString('es-AR')} c/u)\n`;
    });

    message += `\n*Total Estimado:* $${total.toLocaleString('es-AR')}\n`;

    if (note.trim()) {
      message += `\n*Nota / Detalles de Personalización:* "${note.trim()}"\n`;
    }

    message += `\n¿Podrían pasarme el precio final y coordinar el pedido? ¡Muchas gracias! 💕`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Safely open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="w-screen max-w-md bg-[#FFF9FB] shadow-2xl flex flex-col h-full rounded-l-[36px] border-l border-[#FFF1F5]"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#FFF1F5] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-[#FFF0F3] text-sakura-500 rounded-full border border-sakura-200/20">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif font-bold text-[#5D4037]">Tu Pedido</h2>
                    <p className="text-xs text-stone-400 font-serif italic">
                      {items.length === 0 ? 'Vacío' : `${items.length} producto${items.length > 1 ? 's' : ''}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-[#A1887F] hover:text-red-500 hover:bg-red-50/50 p-2 rounded-full transition-all duration-200 cursor-pointer"
                      title="Vaciar Carrito"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="text-[#A1887F] hover:text-stone-600 hover:bg-stone-100/50 p-2 rounded-full transition-all duration-200 cursor-pointer"
                    title="Cerrar Carrito"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 scale-150 bg-sakura-100/30 rounded-full blur-xl" />
                      <span className="relative text-5xl">🌸</span>
                    </div>
                    <h3 className="font-serif font-semibold text-[#5D4037] text-base mb-1">
                      ¡Tu carrito está esperando!
                    </h3>
                    <p className="text-stone-400 text-xs max-w-xs mb-6">
                      Explorá nuestro catálogo y agregá las agendas, mates o llaveros que más te gusten para personalizar.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-[#FFF0F3] hover:bg-sakura-100/30 text-sakura-500 font-serif italic font-bold text-xs py-2.5 px-6 rounded-full border border-sakura-200/20 cursor-pointer"
                    >
                      Ver Catálogo
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-3 bg-white rounded-[24px] border border-[#FFF1F5] shadow-[0_6px_20px_rgba(255,183,197,0.03)] hover:border-sakura-100 transition-colors group"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 rounded-[16px] overflow-hidden bg-[#FFF9FB] shrink-0 border border-stone-100">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-grow min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-serif font-bold text-[#5D4037] text-sm truncate group-hover:text-sakura-500 transition-colors">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-stone-300 hover:text-red-500 p-0.5 transition-colors cursor-pointer"
                              title="Eliminar producto"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <span className="text-[10px] text-stone-400 uppercase font-semibold">
                            {item.product.categories[0]}
                          </span>
                        </div>

                        {/* Controls & Price */}
                        <div className="flex justify-between items-center mt-1">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1.5 border border-[#FFF1F5] bg-[#FFF9FB] rounded-full px-2 py-0.5">
                            <button
                              disabled={item.quantity <= 1}
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="text-stone-400 hover:text-sakura-500 disabled:opacity-30 p-0.5 transition-colors cursor-pointer"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="w-5 text-center text-xs font-serif font-bold text-[#5D4037]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="text-stone-400 hover:text-sakura-500 p-0.5 transition-colors cursor-pointer"
                            >
                              <Plus size={10} />
                            </button>
                          </div>

                          {/* Price Subtotal */}
                          <div className="text-right">
                            <div className="text-xs font-serif font-bold text-sakura-500">
                              ${(item.product.price * item.quantity).toLocaleString('es-AR')}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-[9px] text-stone-400">
                                ${item.product.price.toLocaleString('es-AR')} c/u
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Checkout / Total Section */}
              {items.length > 0 && (
                <div className="p-6 border-t border-[#FFF1F5] bg-[#FFF0F3]/40 space-y-4 rounded-b-[36px]">
                  {/* Additional Note Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-serif font-bold text-[#5D4037] flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-sakura-400" />
                      <span>Nota adicional (Opcional)</span>
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Ej: nombres para grabar, colores preferidos, aclaraciones o regalos especiales..."
                      className="w-full text-xs p-3 bg-white border border-[#FFF1F5] rounded-[16px] focus:ring-1 focus:ring-sakura-300 focus:border-sakura-300 outline-none resize-none transition-all duration-200"
                      rows={3}
                    />
                  </div>

                  {/* Pricing Overview */}
                  <div className="space-y-2 border-t border-stone-100 pt-3">
                    <div className="flex justify-between items-center text-xs text-stone-500">
                      <span>Subtotal</span>
                      <span>${total.toLocaleString('es-AR')}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-stone-500">
                      <span>Personalización</span>
                      <span className="text-emerald-600 font-semibold">¡Bonificada! 🎉</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-stone-200/50">
                      <span className="font-serif font-bold text-[#5D4037] text-sm">Total Estimado</span>
                      <span className="font-serif font-bold text-sakura-500 text-lg">
                        ${total.toLocaleString('es-AR')}
                      </span>
                    </div>
                  </div>

                  {/* Informational Warning */}
                  <div className="flex gap-2 p-2.5 bg-white/80 rounded-[16px] border border-[#FFF1F5] text-[10px] text-stone-500">
                    <AlertTriangle size={14} className="text-sakura-400 shrink-0 mt-0.5" />
                    <span>
                      Este pedido se coordinará por WhatsApp. El precio final y la seña se acordarán directamente con PrintBloom.
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2.5 bg-sakura-500 hover:bg-sakura-600 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-full shadow-lg shadow-sakura-100/50 transition-all duration-300 cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Finalizar Pedido por WhatsApp</span>
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
