import {removeItem} from '@/lib/actions/cart/cartActions'
import {IProduct} from '@/app/product/types/product'
import {revalidatePath} from 'next/cache'

interface Props {
  product: IProduct
}

export async function UserCartActions({product}: Props) {
  return (
    <form>
      <button
        formAction={async () => {
          'use server'
          await removeItem(product.id)
          revalidatePath('/cart')
        }}
      >
        Eliminar
      </button>
      <button>Modificar</button>
      <button>Comprar Ahora</button>
    </form>
  )
}
