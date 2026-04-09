export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  itemsPurchased?: number;
}

export interface Invoice {
  invoiceId: string;
  productId: string;
  productName: string;
  userEmail: string;
  date: string;
  status: 'pending' | 'paid' | 'cancelled';
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl?: string;
}
