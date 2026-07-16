export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categories: string[];
  isFeatured?: boolean;
  rating?: number;
  badge?: string;
  specs?: {
    material?: string;
    dimensions?: string;
    customizable?: boolean;
    demora?: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CategoryType = 
  | 'Todas'
  | 'Agendas'
  | 'Cuadernos'
  | 'Álbumes'
  | 'Mates'
  | 'Llaveros'
  | 'Souvenirs'
  | 'Impresión 3D'
  | 'Organización'
  | 'Regalos';
