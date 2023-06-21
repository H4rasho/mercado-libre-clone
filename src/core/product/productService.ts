import { Prisma } from "@prisma/client";
import prisma from "../db/client";

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
