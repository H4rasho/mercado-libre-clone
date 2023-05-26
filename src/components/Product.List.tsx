import { ProductCard } from "./ProductCard";
import products from "@/mocks/products.json";

export async function ProductList() {
  return (
    <ul className="flex gap-2 justify-between">
      {products.map((product) => {
        /* @ts-expect-error Server Component */
        return <ProductCard product={product} />;
      })}
    </ul>
  );
}
