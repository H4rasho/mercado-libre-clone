import Link from 'next/link'
import {IProduct} from '../types/product'

export async function ProductCard({product}: {product: IProduct}) {
  return (
    <article className="bg-white w-[173px]">
      <Link href={`/product/${product.id}`} className="hover:text-[#3483fa]">
        <img
          className="aspect-square object-contain"
          src={product.pictures?.at(0)}
          width={150}
          height={150}
          alt={product.description || product.title}
        />
        <footer className="text-sm font-regular border-gray-100">
          <p className="overflow-hidden line-clamp-2">{product.description}</p>
          <p className="text-2xl text-black ">{`${Number(
            product.price
          ).toLocaleString('es-Cl', {
            style: 'currency',
            currency: 'CLP',
          })}`}</p>
          <p className="text-[#00a650] font-light">12x $ 17.083 sin interés</p>
          <p className="text-[#00a650] ">Envío gratis full</p>
        </footer>
      </Link>
    </article>
  )
}
