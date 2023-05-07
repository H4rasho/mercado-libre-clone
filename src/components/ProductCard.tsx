import Image from "next/image";
import productExample from "../../public/productExample.webp";

export function ProductCard() {
  return (
    <article className="bg-white w-[224px] rounded-s shadow-sm">
      <Image
        src={productExample}
        width={224}
        height={224}
        alt="productExample"
      />
      <footer className="border-t p-4 text-sm font-regular border-gray-100">
        <p className="text-2xl ">$ 204.990 </p>
        <p className="text-green-500 font-semibold">12x $ 17.083 sin interés</p>
        <p className="text-green-500 font-bold">Envío gratis</p>
      </footer>
    </article>
  );
}
