import {revalidatePath} from 'next/cache'
import {redirect} from 'next/navigation'

import {IProduct} from '../types/product'
import {additemToCart} from '@/lib/actions/cartActions'

export async function AddToCard({item}: {item: IProduct}) {
  return (
    <form>
      <button
        formAction={async () => {
          'use server'
          additemToCart(item.id)
          revalidatePath('/cart')
          redirect('/cart')
        }}
        className="py-3 px-6 bg-[#E3EDFB] text-sm font-semibold rounded-md text-[#3483fa]"
      >
        Agregar al carrito
      </button>
    </form>
  )
}
