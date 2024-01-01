import {IProduct} from '@/app/product/types/product'
import {UserCartActions} from './UserCartActions'

export function CartItem({product}: {product: IProduct}) {
  return (
    <article className="flex justify-between gap-8 py-6 px-2">
      <div className="flex flex-shrink-0  justify-center items-center gap-4">
        <div>
          <img
            src={product.image}
            width={50}
            height={50}
            alt={product.description || product.title}
          />
        </div>
        <div>
          <header className="py-4 w-96">
            <p className="text-sm font-bold w-full overflow-hidden whitespace-nowrap text-ellipsis">
              {product.title}
            </p>
          </header>
          <footer>
            <UserCartActions product={product} />
          </footer>
        </div>
      </div>
      <div className="flex w-full  justify-around items-center">
        <div className="flex justify-between py-1 px-2 items-center border w-24 text-md">
          <button>-</button>
          <p className="text-sm font-bold">1</p>
          <button>+</button>
        </div>
        <p>{`$ ${Number(product.price).toLocaleString()}`}</p>
      </div>
    </article>
  )
}
