export const revalidate = 5
import Image from 'next/image'
import banner from '../../public/banner.webp'
import {ProductList} from '@/app/product/components/Product.List'
import {PaymentPromoSection} from '@/components/PaymentPromoSection'
import {getRecommendationFromLastSearch} from '@/lib/actions/recommendationActions'
import {Card} from '@/components/Card'

export default async function Index() {
  const recomendations = await getRecommendationFromLastSearch()
  const meliPlusPrice = 8490
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
      <section className="flex gap-4 ">
        <Card
          className="bg-white min-w-[320px] px-3 py-4"
          title="Oferta del día"
        >
          <ProductList products={recomendations.slice(0, 1)} />
        </Card>
        <Card className="bg-white px-3 py-4" title="Ofertas">
          <ProductList products={recomendations.slice(0, 4)} />
        </Card>
      </section>
      <section>
        <Card className="bg-white">
          <header className="flex justify-between items-center text-white bg-purple-700 px-6 py-5 rounded-t-md">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-semibold">Suscríbite a</h2>
              <Image
                src="/meliplus-outline-pill@3x.png"
                width={96}
                height={40}
                alt="Meli plus logo"
              />
            </div>
            <p className="font-medium text-3xl border-l-2 px-4">
              {meliPlusPrice.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP',
              })}
              <span className="text-sm ml-1">/mes</span>
            </p>
          </header>
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium">
              Consigue los mejores beneficios en Mercado Libre
            </h3>
            <div className="flex justify-around mt-8">
              <div className="flex items-center max-w-[300px]">
                <Image
                  src="/truckgiftv4@2x.png"
                  width={72}
                  height={72}
                  className="border-2 rounded-full"
                  alt="Truck gift"
                />
                <p className="px-4">
                  Envíos gratis en millones de productos desde $ 9.990
                </p>
              </div>
              <div className="flex items-center max-w-[300px]">
                <Image
                  src="/combo-widgetl6@2x.jpg"
                  width={72}
                  height={72}
                  className="border-2 rounded-full"
                  alt="Truck gift"
                />
                <p className="px-4">Disney+ y Star+ sin cargo</p>
              </div>
              <div className="flex items-center max-w-[300px]">
                <Image
                  src="/deezer-logo-circle-vdp-filled@3x.png"
                  width={72}
                  height={72}
                  className="border-2 rounded-full"
                  alt="Truck gift"
                />
                <p className="px-4">Deezer Premium 12 meses sin cargo</p>
              </div>
            </div>
          </div>
          <footer className="flex justify-end px-8 py-4">
            <a
              className="py-3 px-6 bg-[#3483fa] font-semibold text-sm text-white rounded-md"
              href="#"
            >
              Suscribite a Meli+
            </a>
          </footer>
        </Card>
      </section>
    </>
  )
}
