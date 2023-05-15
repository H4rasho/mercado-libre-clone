import prisma from "@/core/db/client";
import { ProductCard } from "./ProductCard";

export async function ProductList() {
  const products = await prisma.product.findMany();
  return (
    <ul className="flex gap-2">
      {products.map((product) => {
        /* @ts-expect-error Server Component */
        return <ProductCard product={product} />;
      })}
    </ul>
  );
}
