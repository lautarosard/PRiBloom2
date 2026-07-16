import { motion } from 'motion/react';
import { Heart, Sparkles, PenTool, CheckCircle, Instagram, Send, MapPin, Clock } from 'lucide-react';
import FloralCorner from './FloralCorner';

export default function AboutSection() {
  const handleInstagram = () => {
    window.open('https://instagram.com', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491134092802', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative floral corners in the main section */}
      <FloralCorner position="top-left" className="text-sakura-200" />
      <FloralCorner position="bottom-right" className="text-sakura-100" />

      {/* About Section */}
      <section id="sobre-nosotros" className="py-20 border-t border-stone-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 space-y-6 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FFF0F3] text-sakura-500 rounded-full text-xs font-serif italic font-semibold border border-sakura-200/30">
                <Heart size={12} className="fill-current text-sakura-400" />
                <span>Nuestra Historia</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#5D4037] leading-tight">
                Sobre <span className="font-bold">PrintBloom</span>
              </h2>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                PrintBloom nació con la ilusión de crear productos personalizados que combinan <span className="font-serif italic font-semibold text-sakura-500">creatividad, diseño y dedicación</span>. Nos apasiona dar vida a tus ideas, ya sea a través de la calidez de un cuaderno cosido a mano o de la precisión de una pieza impresa en 3D.
              </p>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                Cada pieza es realizada de forma artesanal y con una atención meticulosa a los detalles. No producimos en masa; creamos con el alma. Buscamos que cada cliente reciba un producto único, especial y listo para regalar o regalarse.
              </p>

              {/* Attributes list */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-sakura-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-[#5D4037] text-xs">Materia Prima Premium</h4>
                    <p className="text-[10px] text-stone-500">Papeles seleccionados y filamento biodegradable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-sakura-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-[#5D4037] text-xs">Diseño Exclusivo</h4>
                    <p className="text-[10px] text-stone-500">Detalles pensados de principio a fin.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Graphic Badge/Aesthetic Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#FFF0F3] to-[#FFF9FB]/50 p-8 flex items-center justify-center text-center shadow-[0_12px_40px_rgba(255,183,197,0.15)] border border-[#FFB7C5]/30">
                <div className="space-y-4">
                  <span className="text-4xl md:text-5xl animate-bounce" style={{ display: 'inline-block', animationDuration: '3s' }}>🌸</span>
                  <h3 className="font-serif italic text-[#5D4037] text-xl md:text-2xl font-light leading-snug">
                    "Pequeños detalles que <span className="font-semibold text-sakura-500">florecen</span> en tu rutina."
                  </h3>
                  <div className="w-12 h-0.5 bg-sakura-200 mx-auto" />
                  <p className="text-[10px] text-stone-400 font-medium tracking-widest uppercase">
                    PrintBloom Crew
                  </p>
                </div>

                {/* Floating decor stars */}
                <div className="absolute top-8 left-12 text-sakura-300 animate-pulse"><Sparkles size={16} /></div>
                <div className="absolute bottom-12 right-12 text-sakura-300 animate-pulse" style={{ animationDelay: '1s' }}><Sparkles size={12} /></div>
                <div className="absolute top-1/2 right-6 text-sakura-400 animate-pulse" style={{ animationDelay: '2s' }}><Heart size={14} className="fill-sakura-50" /></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Info Blocks / How it works */}
      <section className="py-16 bg-[#FFF9FB] border-t border-[#FCE4EC]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-[28px] border border-[#FFF1F5] shadow-[0_12px_35px_rgba(255,183,197,0.08)] text-center space-y-3">
              <span className="text-3xl block">🎨</span>
              <h3 className="font-serif font-bold text-[#5D4037] text-sm">1. Elegí tu Diseño</h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Navegá por nuestro catálogo y seleccioná el producto que quieras. Muchos tienen opciones de colores o nombres personalizados.
              </p>
            </div>
            <div className="bg-white p-7 rounded-[28px] border border-[#FFF1F5] shadow-[0_12px_35px_rgba(255,183,197,0.08)] text-center space-y-3">
              <span className="text-3xl block">💬</span>
              <h3 className="font-serif font-bold text-[#5D4037] text-sm">2. Coordiná por WhatsApp</h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Al enviar tu pedido al carrito y finalizar, se generará un mensaje automático. Acordamos señas, plazos y envíos en el chat.
              </p>
            </div>
            <div className="bg-white p-7 rounded-[28px] border border-[#FFF1F5] shadow-[0_12px_35px_rgba(255,183,197,0.08)] text-center space-y-3">
              <span className="text-3xl block">💝</span>
              <h3 className="font-serif font-bold text-[#5D4037] text-sm">3. Retirá tu Pedido</h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                Elaboramos tu pieza con total dedicación. Hacemos envíos o podés coordinar el retiro gratis por nuestro taller.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D1B18] text-[#D7CCC8] py-16 px-6 border-t border-[#3E2723] relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#3E2723]">
            
            {/* Column 1: Logo & brand description */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-serif italic font-bold text-sakura-400">PrintBloom</span>
                <div className="w-1.5 h-1.5 rounded-full bg-sakura-300"></div>
              </div>
              <p className="text-[#A1887F] text-xs leading-relaxed max-w-sm">
                Un taller dedicado a la fusión creativa de la impresión 3D, encuadernación artesanal y papelería única. Creamos regalos con alma, pensados para florecer en tu día a día.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleInstagram}
                  className="bg-[#3E2723] hover:bg-sakura-500 text-[#D7CCC8] hover:text-white p-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  title="Seguinos en Instagram"
                >
                  <Instagram size={16} />
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#3E2723] hover:bg-emerald-600 text-[#D7CCC8] hover:text-white p-2.5 rounded-full transition-all duration-300 cursor-pointer"
                  title="Chatear por WhatsApp"
                >
                  <Send size={15} />
                </button>
              </div>
            </div>

            {/* Column 2: Quick links */}
            <div className="md:col-span-3 space-y-4">
              <h3 className="font-serif font-bold text-white text-xs uppercase tracking-widest">
                Explorar
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#catalogo" className="text-[#A1887F] hover:text-sakura-300 transition-colors">
                    Catálogo Completo
                  </a>
                </li>
                <li>
                  <a href="#sobre-nosotros" className="text-[#A1887F] hover:text-sakura-300 transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#catalogo" className="text-[#A1887F] hover:text-sakura-300 transition-colors">
                    Productos Destacados
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact details */}
            <div className="md:col-span-4 space-y-4">
              <h3 className="font-serif font-bold text-white text-xs uppercase tracking-widest">
                Contacto
              </h3>
              <ul className="space-y-3 text-xs text-[#A1887F]">
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-sakura-400 shrink-0" />
                  <span>Envíos a todo el país / Retiros en Buenos Aires, AR</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={14} className="text-sakura-400 shrink-0" />
                  <span>Elaboración artesanal: de 2 a 15 días según el producto</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[14px]">💬</span>
                  <span className="text-[#D7CCC8] font-semibold">Toda la compra se coordina por WhatsApp!</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1887F]">
            <div>
              &copy; {new Date().getFullYear()} PrintBloom. Hecho con amor y dedicación 🌸.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-[#D7CCC8] transition-colors">Encuadernación de autor</span>
              <span className="hover:text-[#D7CCC8] transition-colors">Impresión 3D Eco</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
