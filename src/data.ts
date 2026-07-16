import { Product } from './types';

// Image paths for our generated custom assets
export const HERO_IMAGE = '/src/assets/images/printbloom_hero_mockup_1784165941315.jpg';

export const products: Product[] = [
  {
    id: 'agenda-sakura-2026',
    name: 'Agenda Sakura 2026',
    description: 'Agenda diaria tamaño A5 con encuadernación artesanal. Tapa dura forrada en tela importada con flores de cerezo y detalles en foil dorado.',
    price: 18500,
    image: '/src/assets/images/product_agenda_sakura_1784165957950.jpg',
    categories: ['Agendas', 'Regalos', 'Organización'],
    isFeatured: true,
    rating: 5,
    badge: 'Destacado',
    specs: {
      material: 'Tapa dura entelada de algodón premium',
      dimensions: '15 x 21 cm (A5) - 360 páginas',
      customizable: true,
      demora: '3 a 5 días hábiles'
    }
  },
  {
    id: 'mate-geo-rosa',
    name: 'Mate 3D Geo Rosa Pastel',
    description: 'Mate de diseño geométrico, impreso en 3D con filamento biodegradable de alta resistencia. Cuenta con un interior de polipropileno térmico, seguro para alimentos.',
    price: 7500,
    image: '/src/assets/images/product_mate_geo_1784165968484.jpg',
    categories: ['Mates', 'Impresión 3D', 'Regalos'],
    isFeatured: true,
    rating: 5,
    badge: 'Más Vendido',
    specs: {
      material: 'PLA Biodegradable + Polipropileno térmico atóxico',
      dimensions: '8.5 cm alto x 7.5 cm diámetro',
      customizable: true,
      demora: '2 a 3 días hábiles'
    }
  },
  {
    id: 'album-memorias',
    name: 'Álbum de Fotos Memorias',
    description: 'Álbum artesanal con tapa de lienzo y pana rosa viejo. Costura Copta expuesta hilada a mano y hojas gruesas color crema libres de ácido para conservar tus fotos.',
    price: 22000,
    image: '/src/assets/images/product_album_fotos_1784165989192.jpg',
    categories: ['Álbumes', 'Regalos'],
    isFeatured: true,
    rating: 4.9,
    badge: 'Artesanal',
    specs: {
      material: 'Lienzo rústico, pana y hojas italianas de 240g libres de ácido',
      dimensions: '21 x 21 cm - 30 hojas (60 carillas)',
      customizable: true,
      demora: '5 a 7 días hábiles'
    }
  },
  {
    id: 'llavero-kawaii-sakura',
    name: 'Llavero Kawaii Sakura',
    description: 'Llaveros adorables inspirados en la flor de cerezo y personajes Kawaii, impresos en 3D en capas multicolor sin pintar. Incluye argolla de metal rosa pastel.',
    price: 2800,
    image: '/src/assets/images/product_llavero_kawaii_1784165978640.jpg',
    categories: ['Llaveros', 'Impresión 3D', 'Souvenirs'],
    isFeatured: true,
    rating: 4.8,
    badge: 'Nuevo',
    specs: {
      material: 'PLA Premium bicolor y argolla de acero reforzado',
      dimensions: '5 x 5 cm (espesor de 4mm)',
      customizable: true,
      demora: '1 a 2 días hábiles'
    }
  },
  {
    id: 'planner-jardin',
    name: 'Planner Semanal Jardín de Flores',
    description: 'Planificador semanal perpetuo de escritorio. Hojas de alto gramaje para organizar tus semanas con ilustraciones florales y espacio para notas diarias.',
    price: 14200,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600',
    categories: ['Agendas', 'Organización'],
    rating: 4.7,
    specs: {
      material: 'Papel de 90g con anillado metálico blanco',
      dimensions: '17 x 24 cm - 60 hojas a todo color',
      customizable: false,
      demora: 'Entrega inmediata'
    }
  },
  {
    id: 'cuaderno-copta-liso',
    name: 'Cuaderno Copta Hojas Lisas',
    description: 'Cuaderno de dibujo o notas cosido a mano con hilo de lino encerado. Tapa dura forrada en papel decorado premium y lomo expuesto.',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    categories: ['Cuadernos', 'Regalos'],
    rating: 4.9,
    specs: {
      material: 'Costura Copta tradicional expuesta, hojas lisas de 90g',
      dimensions: '13 x 18 cm - 80 hojas',
      customizable: true,
      demora: '2 a 4 días hábiles'
    }
  },
  {
    id: 'bitacora-viaje-cuero',
    name: 'Bitácora de Viaje Cuero Vegano',
    description: 'Bitácora flexible de cuero sintético con elástico contenedor. Interior intercambiable con cuadernillos ideales para acuarela, bocetos o notas en ruta.',
    price: 11500,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600',
    categories: ['Cuadernos', 'Organización'],
    rating: 4.6,
    specs: {
      material: 'Cuero ecológico flexible con cuadernillo removible de 120g',
      dimensions: '11 x 16 cm (Pocket)',
      customizable: true,
      demora: '3 a 5 días hábiles'
    }
  },
  {
    id: 'mate-custom-flora',
    name: 'Mate Custom Floral Pintado',
    description: 'Mate impreso en 3D con detalles de flores moldeadas en relieve, pintado a mano meticulosamente por nuestro equipo y recubierto con laca protectora brillante.',
    price: 8200,
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=600',
    categories: ['Mates', 'Impresión 3D'],
    rating: 5,
    badge: 'Edición Especial',
    specs: {
      material: 'PLA premium pintado a mano y sellado con resina atóxica',
      dimensions: '9 cm alto x 8 cm diámetro',
      customizable: true,
      demora: '4 a 6 días hábiles'
    }
  },
  {
    id: 'album-bebe-primer-ano',
    name: 'Álbum Bebé - Primer Año',
    description: 'Álbum temático para atesorar el primer año del bebé. Contiene plantillas para completar con datos, fotos del crecimiento, huellas y notas especiales.',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=600',
    categories: ['Álbumes', 'Regalos'],
    rating: 4.9,
    specs: {
      material: 'Tapa acolchada entelada, interior ilustrado a color de 180g',
      dimensions: '23 x 23 cm - 40 hojas',
      customizable: true,
      demora: '5 a 7 días hábiles'
    }
  },
  {
    id: 'llavero-stitch-personalizado',
    name: 'Llavero Stitch con Nombre',
    description: 'Llavero de Stitch impreso en 3D en tres dimensiones con filamento de alta definición. Personalizá la placa trasera con tu nombre o palabra favorita.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&q=80&w=600',
    categories: ['Llaveros', 'Impresión 3D', 'Souvenirs'],
    rating: 4.8,
    specs: {
      material: 'PLA reforzado multicolor, argolla de metal niquelada',
      dimensions: '6.5 x 4.5 cm',
      customizable: true,
      demora: '1 a 2 días hábiles'
    }
  },
  {
    id: 'denarios-comunion',
    name: 'Denarios de Comunión en 3D',
    description: 'Delicados souvenirs para comunión o bautismo. Cruz y cuentas con diseño exclusivo de calado floral impresos en un deslumbrante filamento perlado.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1548623917-2f34568f5ee8?auto=format&fit=crop&q=80&w=600',
    categories: ['Souvenirs', 'Impresión 3D'],
    badge: 'X Mayor',
    specs: {
      material: 'Filamento satinado perlado premium (PLA Silk)',
      dimensions: '12 cm de largo total',
      customizable: true,
      demora: '10 a 15 días (Pedido mínimo de 15 unidades)'
    }
  },
  {
    id: 'maceta-sakura-mini',
    name: 'Maceta Sakura Mini Souvenir',
    description: 'Maceta mini con diseño de pétalos de flor de cerezo en relieve. Ideal para suculentas o cactus chicos. Ideal como souvenir para eventos con tarjetita personalizada.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600',
    categories: ['Souvenirs', 'Impresión 3D', 'Regalos'],
    rating: 4.7,
    specs: {
      material: 'PLA con tratamiento impermeable interior y orificio de drenaje',
      dimensions: '6.5 cm diámetro x 6 cm alto',
      customizable: true,
      demora: '7 a 10 días hábiles'
    }
  },
  {
    id: 'lampara-luna-3d',
    name: 'Lámpara de Noche Luna 3D',
    description: 'Increíble lámpara de mesa que imita la textura real de la luna mediante impresión 3D por capas. Incluye un delicado soporte de madera y luz LED cálida recargable.',
    price: 19500,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600',
    categories: ['Impresión 3D', 'Regalos'],
    rating: 4.9,
    badge: 'Destacado',
    specs: {
      material: 'PLA translúcido de alta precisión, base de madera natural encastrada',
      dimensions: '15 cm de diámetro',
      customizable: false,
      demora: '3 a 4 días hábiles'
    }
  },
  {
    id: 'organizador-prisma',
    name: 'Organizador de Escritorio Prisma',
    description: 'Organizador de diseño multifuncional para lápices, reglas y libretas pequeñas. Aporta un look moderno y ordenado a tu espacio de estudio o trabajo.',
    price: 11200,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600',
    categories: ['Impresión 3D', 'Organización'],
    rating: 4.8,
    specs: {
      material: 'PLA reforzado en estructura monolítica',
      dimensions: '12 cm ancho x 12 cm largo x 10 cm alto',
      customizable: true,
      demora: '2 a 3 días hábiles'
    }
  },
  {
    id: 'set-bullet-bujo',
    name: 'Set de Bullet Journal PrintBloom',
    description: 'El kit perfecto para amantes de la organización. Incluye un cuaderno de hojas punteadas de 120g, plantillas stencil impresas en 3D y planchas de stickers florales.',
    price: 26000,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600',
    categories: ['Cuadernos', 'Organización', 'Regalos'],
    rating: 4.9,
    badge: 'Kit Completo',
    specs: {
      material: 'Cuaderno cosido de 120g + Plantilla 3D flexible + Stickers premium',
      dimensions: 'A5 (15 x 21 cm) completo',
      customizable: true,
      demora: '4 a 6 días hábiles'
    }
  },
  {
    id: 'box-regalo-printbloom',
    name: 'Box Regalo PrintBloom Especial',
    description: 'Un regalo inolvidable presentado en una hermosa caja Kraft decorada con flores secas. Contiene una Agenda A5, un Mate de diseño 3D, un Llavero Sakura y un señalador artesanal.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600',
    categories: ['Regalos', 'Agendas', 'Mates', 'Llaveros'],
    isFeatured: true,
    rating: 5,
    badge: 'Premium Gift',
    specs: {
      material: 'Caja Kraft rígida aromática con productos surtidos personalizables',
      dimensions: '30 x 20 x 10 cm',
      customizable: true,
      demora: '5 a 7 días hábiles'
    }
  }
];

export const CATEGORIES: { name: string; icon: string }[] = [
  { name: 'Todas', icon: '🌸' },
  { name: 'Agendas', icon: '📖' },
  { name: 'Cuadernos', icon: '📔' },
  { name: 'Álbumes', icon: '🖼️' },
  { name: 'Mates', icon: '🧉' },
  { name: 'Llaveros', icon: '🔑' },
  { name: 'Souvenirs', icon: '🎁' },
  { name: 'Impresión 3D', icon: '🖨️' },
  { name: 'Organización', icon: '📅' },
  { name: 'Regalos', icon: '💝' },
];
