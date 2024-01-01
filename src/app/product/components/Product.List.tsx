import {ProductCard} from './ProductCard'
import {IProduct} from '../types/product'

export async function ProductList({products}: {products: IProduct[]}) {
  return (
    <ul className="flex gap-2">
      {products?.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </ul>
  )
}
