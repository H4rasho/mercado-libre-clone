import Image from "next/image";
import { Product } from "@prisma/client";
import Link from "next/link";

export async function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white w-[224px] rounded-s shadow-sm">
      <Link href={`/product/${product.id}`}>
        <Image
          className="aspect-square object-contain"
          src={product.image}
          width={224}
          height={224}
          alt={product.description || product.title}
        />
        <footer className="border-t p-4 text-sm font-regular border-gray-100">
          <p className="text-2xl">{`${Number(
            product.price
          ).toLocaleString()}`}</p>
          <p className="text-green-500 font-semibold">
            12x $ 17.083 sin interés
          </p>
          <p className="text-green-500 font-bold">Envío gratis</p>
        </footer>
      </Link>
    </article>
  );
}
