export interface List {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  sku: string;
  image_url: string;
  rating: Rating;
  // categoryId: string;
}

export interface Rating {
  rate: number;
  count: number;
}
