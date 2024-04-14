'use server'

import {IProduct} from '@/app/product/types/product'
import {USER_ID} from '@/lib/db/constants'
import {kv} from '@vercel/kv'
import {revalidatePath} from 'next/cache'

export async function removeItemFromCart(productId: IProduct['id']) {
  await kv.hdel(`cart-${USER_ID}`, productId)
  revalidatePath('/cart')
}

export async function addItemToCart(productId: IProduct['id']) {
  try {
    const response = await kv.hset(`cart-${USER_ID}`, {
      [productId]: {
        quantity: 1,
        timestamp: Date.now(),
      },
    })
    if (response === 0) {
      throw new Error('Error al añadir el producto al carrito')
    }
    return {
      ok: true,
      message: 'Producto añadido al carrito',
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error al añadir el producto al carrito')
  }
}
