import { Prisma, Product } from "@prisma/client";
import prisma from "../db/client";

export const createProduct = (data: Prisma.ProductCreateInput) => {
  return prisma.product.create({ data });
};

export const getProducts = () => {
  return prisma.product.findMany();
};
