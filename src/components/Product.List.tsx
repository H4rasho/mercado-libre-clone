import { getProducts } from "@/core/product/productService";
import { ProductCard } from "./ProductCard";

export async function ProductList() {
  const products = await getProducts();
  return (
    <ul className="flex gap-2 justify-between">
      {products.map((product) => {
        /* @ts-expect-error Server Component */
        return <ProductCard product={product} />;
      })}
    </ul>
  );
}
