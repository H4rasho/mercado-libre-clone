export const revalidate = 5
import Image from 'next/image'
import banner from '../../public/banner.webp'
import {ProductList} from '@/app/product/components/Product.List'
import {PaymentPromoSection} from '@/components/PaymentPromoSection'
import {getRecommendationFromLastSearch} from '@/lib/actions/recommendationActions'

export default async function Index() {
  const recomendations = await getRecommendationFromLastSearch()
  return (
    <>
      <Image src={banner} className="w-[1600] " alt="Banner" />
      <PaymentPromoSection />
      <section className="bg-white rounded-md px-3 py-4 shadow-md">
        <h2 className="text-xl  font-normal text-left  text-[rgb(0 0 0 / 90%)]">
          Inspirado en lo último que viste
        </h2>
        <ProductList products={recomendations} />
      </section>
    </>
  )
}
