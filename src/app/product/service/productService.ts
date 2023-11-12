import { Prisma, Product } from "@prisma/client";
import prisma from "@/lib/db/client";
import { type SearchResponse } from "../types/api-response";
import { IProduct } from "../types/product";

export const createProduct = (
  data: Prisma.ProductCreateInput,
  sellerId: string,
) => {
  return prisma.product.create({
    data: {
      ...data,
      seller: {
        connect: {
          id: sellerId,
        },
      },
    },
  });
};

export const getProducts = () => {
  return prisma.product.findMany();
};

export const getProductById = (productId: Product["id"]) => {
  return prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
};

export async function search(query: string): Promise<IProduct[]> {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLC/search?q=${query}&limit=5`,
  );
  const data: SearchResponse = await response.json();
  return data.results.map((result) => ({
    id: result.id,
    name: result.title,
    description: result.title,
    price: result.price,
    stock: 0,
    sellerId: "1",
    image: result.thumbnail,
    stars: 0,
    title: result.title,
    characteristics: [],
  }));
}
