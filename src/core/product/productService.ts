import { Product } from "@prisma/client";
import prisma from "../db/client";

export const createProduct = (product: Omit<Product, "id">) => {
  return prisma.product.create({
    data: product,
  });
};
