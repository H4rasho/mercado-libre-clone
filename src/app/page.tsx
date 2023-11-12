import Image from 'next/image'
import banner from '../../public/banner.webp'
import {ProductList} from '@/app/product/components/Product.List'
import {PaymentPromoSection} from '@/components/PaymentPromoSection'
import {search} from './product/service/productService'

export default async function Index() {
  const products = await search({})
  console.log(products)

  return (
    <>
      <Image src={banner} className="w-[1600] " alt="Banner" />
      <PaymentPromoSection />
      <section className="">
        <h2 className="text-2xl py-4 text-left font-light text-gray-500">
          Basado en tu última Visita
        </h2>

        {/* @ts-expect-error Server Component */}
        <ProductList products={products} />
      </section>
    </>
  )
}
