import {ProductRating} from '@/app/product/components/ProductRating'
import {IProduct} from '@/app/product/types/product'
import Link from 'next/link'

export function ProductArticle({product}: {product: IProduct}) {
  return (
    <article
      className="bg-white rounded-s text-xl text-gray-700 px-11 py-7 border-b"
      key={product.id}
    >
      <Link
        className="flex gap-6 w-full text-left"
        href={`product/${product.id}`}
      >
        <img
          src={product.image}
          alt={product?.description ?? product.title}
          width={160}
          height={160}
        ></img>
        <div className="max-w-[627px] w-full">
          <h2>{product.title}</h2>
          <small className="text-[12px]">por {product?.seller?.name}</small>

          <p className="text-sm text-gray-300 line-through fonst-light">
            {product.originalPrice?.toLocaleString('es-CL', {
              style: 'currency',
              currency: 'CLP',
            })}
          </p>
          <div className="flex justify-between">
            <div>
              <p>
                {product.price.toLocaleString('es-CL', {
                  style: 'currency',
                  currency: 'CLP',
                })}
              </p>
              <p className="text-sm text-green-500 font-light">
                en 12x{' '}
                {(product.price / 12).toLocaleString('es-CL', {
                  style: 'currency',
                  currency: 'clp',
                })}
              </p>
            </div>
            <ProductRating rating={product.stars} />
          </div>
        </div>
      </Link>
    </article>
  )
}
