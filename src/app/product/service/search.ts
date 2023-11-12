import { type SearchResponse } from "../types/api-response";
import { type IProduct } from "../types/product";

export async function search(query: string): Promise<IProduct[]> {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLC/search?q=${query}&limit=5`,
  );
  const data = (await response.json()) as SearchResponse;
  return data.results.map((result) => ({
    id: result.id,
    name: result.title,
    description: result.title,
    price: result.price,
    originalPrice: Number(result.original_price),
    stock: 0,
    sellerId: "1",
    image: result.thumbnail,
    stars: result.seller.seller_reputation.transactions.ratings.positive * 5,
    title: result.title,
    seller: {
      id: result.seller.id,
      name: result.seller.nickname,
    },
    characteristics: [],
  }));
}
