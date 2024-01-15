export const dynamic = 'force-dynamic'
import {kv} from '@vercel/kv'

import {searchById} from '../product/service/search'
import {USER_ID} from '@/lib/db/constants'
import {CartItem} from './components/CartItem'

export default async function Cart() {
  const productsIds = await kv.hgetall(`cart-${USER_ID}`)

  if (!productsIds) return <p>No hay productos en el carrito</p>

  const cart = []
  for (const [id, quantity] of Object.entries(productsIds)) {
    const product = await searchById(id)
    cart.push({product, quantity})
  }

  return (
    <section className="bg-white max-w-3xl rounded-sm">
      <div className="py-3 px-2">
        <h1>Productos</h1>
      </div>
      <div className="h-[1px] bg-gray-300 m-0 w-full"></div>
      <div>
        <ul>
          {cart.map(cartElement => {
            return (
              <li key={cartElement.product.id}>
                <CartItem product={cartElement.product} />
                <div className="h-[1px] bg-gray-300 m-0 w-full"></div>
              </li>
            )
          })}
        </ul>
      </div>
      <div></div>
    </section>
  )
}
