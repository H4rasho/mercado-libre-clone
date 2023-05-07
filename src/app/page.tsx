import Image from "next/image";
import banner from "../../public/banner.webp";
import { ProductCard } from "@/components/ProductCard";

export default function Index() {
  return (
    <>
      <Image src={banner} className="m-auto" alt="Banner" />
      <main className="flex m-auto gap-y-4 flex-col max-w-screen-xl min-h-screen">
        <section>
          <h2 className="text-2xl py-4 text-left font-light text-gray-500">
            Basado en tu última Visita
          </h2>
          <ul className="flex gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </section>
      </main>
    </>
  );
}
