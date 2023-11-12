export interface IProduct {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string | null;
  stock: number;
  stars: number;
  image: string;
  characteristics: any[];
  sellerId: string;
  seller: {
    id: string;
    name: string;
  };
}
