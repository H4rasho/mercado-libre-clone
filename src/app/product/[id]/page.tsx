import Image from "next/image";
import { ProductRating } from "@/app/product/components/ProductRating";
import { getProductById } from "../service/productService";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);

  return (
    <div className="bg-white flex justify-between p-4">
      {product && (
        <>
          <Image
            className="aspect-square object-contain"
            src={product.image}
            width={378}
            height={448}
            alt={product.description || product.title}
          />
          <div className="flex flex-col gap-y-2 p-4 border rounded-md">
            <h1 className="text-xl font-medium">{product.title}</h1>
            <ProductRating rating={Number(product.stars)} />
            <p className="text-3xl ">{`$ ${Number(
              product.price
            ).toLocaleString()}`}</p>
            <p>
              en
              <span className="text-green-500 font-semibold ml-1">
                6x $5-665 sin interés
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <button className="py-3 px-6 bg-[#3483fa] font-semibold text-sm text-white rounded-md">
                Comprar ahora
              </button>
              <button className="py-3 px-6 bg-[#E3EDFB] text-sm font-semibold rounded-md text-[#3483fa]">
                Agregar al carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
