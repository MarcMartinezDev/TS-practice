export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string];
}

export interface Categories {
  smartphones: number,
  laptops: number,
  fragances: number,
  skincare: number,
  groceries: number,
  homeDecoration: number
}

export interface ProductContextType {
  items: Product[] | null,
  setItems: (items: Product[] | null) => void,
  product: Product | null,
  setProduct: (product: Product | null) => void,
  message: string | null,
  setMessage: (message: string | null) => void,
  search: string | null,
  setSearch: (search: string | null) => void
}