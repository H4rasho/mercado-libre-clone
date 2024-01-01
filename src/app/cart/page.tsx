import {USER_ID} from '@/lib/db/constants'
import {kv} from '@vercel/kv'
import {searchById} from '../product/service/search'
import {UserCartActions} from './components/UserCartActions'

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
                <article className="flex justify-between gap-8 py-6 px-2">
                  <div className="flex flex-shrink-0  justify-center items-center gap-4">
                    <div>
                      <img
                        src={cartElement.product.image}
                        width={50}
                        height={50}
                        alt={
                          cartElement.product.description ||
                          cartElement.product.title
                        }
                      />
                    </div>
                    <div>
                      <header className="py-4 w-96">
                        <p className="text-sm font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">
                          {cartElement.product.title}
                        </p>
                      </header>
                      <footer>
                        <UserCartActions product={cartElement.product} />
                      </footer>
                    </div>
                  </div>
                  <div className="flex w-full  justify-around items-center">
                    <div className="flex justify-between py-1 px-2 items-center border w-24 text-md">
                      <button>-</button>
                      <p className="text-sm font-bold">1</p>
                      <button>+</button>
                    </div>
                    <p>{`$ ${Number(
                      cartElement.product.price
                    ).toLocaleString()}`}</p>
                  </div>
                </article>
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
