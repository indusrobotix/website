export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'beginner' | 'intermediate' | 'advanced' | 'industrial';
  price: number;
  currency: 'PKR' | 'USD';
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  localSourcing: boolean;
  chassisType: 'acrylic' | 'metal' | 'plastic' | 'custom';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

export interface KitComponent {
  id: string;
  name: string;
  type: 'microcontroller' | 'sensor' | 'motor' | 'chassis' | 'battery' | 'other';
  brand: string;
  specifications: Record<string, string>;
  localSupplier: boolean;
  supplierInfo?: {
    name: string;
    location: string;
    contact: string;
  };
}

export interface RoboticKit extends Product {
  components: KitComponent[];
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
  assemblyTime: string;
  educationalValue: string[];
  targetAudience: string[];
}
