import Image from "next/image";
import banner from "../../public/banner.webp";
import { ProductList } from "@/components/Product.List";
import { PaymentPromoSection } from "@/components/PaymentPromoSection";

export default function Index() {
  return (
    <>
      <Image src={banner} className="m-auto" alt="Banner" />
      <main className="mt-12  flex m-auto gap-y-4 flex-col max-w-[1200px] min-h-screen">
        <PaymentPromoSection />
        <section>
          <h2 className="text-2xl py-4 text-left font-light text-gray-500">
            Basado en tu última Visita
          </h2>

          {/* @ts-expect-error Server Component */}
          <ProductList />
        </section>
      </main>
    </>
  );
}
