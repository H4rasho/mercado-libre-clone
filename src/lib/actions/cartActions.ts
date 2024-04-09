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
  await kv.hset(`cart-${USER_ID}`, {
    [productId]: 1,
  })
}
