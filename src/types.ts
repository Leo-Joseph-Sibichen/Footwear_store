export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'indoor-slippers' | 'outdoor-slippers' | 'insoles' | 'socks';
  concern: string[]; // e.g. ['Heel Pain', 'Flat Feet']
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  productName: string;
  verified: boolean;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

export interface Concern {
  id: string;
  name: string;
  description: string;
  icon: string;
}
