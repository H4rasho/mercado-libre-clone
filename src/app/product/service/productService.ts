import { Prisma, Product } from "@prisma/client";
import prisma from "@/lib/db/client";

export const createProduct = (
  data: Prisma.ProductCreateInput,
  sellerId: string
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
