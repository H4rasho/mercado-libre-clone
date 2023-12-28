export interface IProduct {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string | null;
  stock: number;
  stars: number;
  image: string;
  sellerId: string;
  seller: {
    id: string;
    name: string;
  };
  pictures?: string[];
}

export interface Search {
  info: {
    currentPage: number;
    totalPages: number;
    totalResults: number;
  };
  results: IProduct[];
}
