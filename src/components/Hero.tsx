import { motion } from 'motion/react';
import { Send, Sparkles, BookOpen, Coffee, Heart } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const handleWhatsAppChat = () => {
    window.open('https://wa.me/5491134092802?text=¡Hola!%20Quiero%20conocer%20más%20sobre%20sus%20productos%20personalizados%20🌸', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-sakura-50 via-white to-stone-50">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sakura-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-sakura-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tagline */}
            <div className="text-sakura-500 font-serif italic text-xl mb-2 block select-none">
              Papelería & 3D
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.15] text-stone-800 tracking-tight text-center lg:text-left">
              Productos <br className="hidden lg:block" />
              <span className="italic text-sakura-500">personalizados</span> <br />
              hechos con <span className="font-bold text-[#5D4037]">amor.</span>
            </h1>

            {/* Subheading */}
            <p className="text-stone-600 text-base md:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
              Impresión 3D, papelería creativa y regalos únicos pensados especialmente para vos y los que más querés.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-sakura-500 text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-sakura-100 hover:bg-sakura-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Ver Catálogo Completo</span>
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-sakura-200 text-xs font-semibold tracking-wide text-stone-700 bg-white hover:bg-sakura-50/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Escribinos por WhatsApp</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-stone-100 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <Heart size={14} className="text-sakura-400 fill-sakura-100" />
                <span>100% Hecho a Mano</span>
              </div>
              <div className="w-1 h-1 bg-stone-300 rounded-full" />
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <Coffee size={14} className="text-amber-500" />
                <span>Atención Personalizada</span>
              </div>
              <div className="w-1 h-1 bg-stone-300 rounded-full" />
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <span>⭐ 5.0 Clientes</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Visual stage frame */}
            <div className="relative w-full max-w-[420px] aspect-square lg:aspect-[4/5] rounded-[2.5rem] p-4 bg-white shadow-xl shadow-sakura-50/40 border border-stone-100 flex items-center justify-center group overflow-hidden">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner">
                <img
                  src={HERO_IMAGE}
                  alt="PrintBloom Mockup de Productos Artesanales"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-2.5">
                  <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white shadow-sm flex items-center gap-1.5 text-[10px] font-semibold text-stone-800">
                    <span className="text-sakura-400">📖</span> Encuadernación
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white shadow-sm flex items-center gap-1.5 text-[10px] font-semibold text-stone-800 animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-sakura-400">🖨️</span> Impresión 3D
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white shadow-sm flex items-center gap-1.5 text-[10px] font-semibold text-stone-800">
                    <span className="text-sakura-400">🌸</span> Craft
                  </div>
                </div>
              </div>
            </div>

            {/* Accent decorative ring */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sakura-100 rounded-full -z-10 blur-xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-rose-100 rounded-full -z-10 blur-2xl animate-float" style={{ animationDelay: '3s' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
