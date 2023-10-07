import { getProducts } from "@/app/product/service/productService";
import { ProductCard } from "./ProductCard";

export async function ProductList() {
  const products = await getProducts();
  return (
    <ul className="flex gap-2">
      {products.map((product) => {
        /* @ts-expect-error Server Component */
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
}
