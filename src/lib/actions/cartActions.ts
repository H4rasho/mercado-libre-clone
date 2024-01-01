'use server'

import {IProduct} from '@/app/product/types/product'
import {USER_ID} from '@/lib/db/constants'
import {kv} from '@vercel/kv'

export async function removeItemFromCart(productId: IProduct['id']) {
  'use server'
  kv.hdel(`cart-${USER_ID}`, productId)
}

export async function additemToCart(productId: IProduct['id']) {
  'use server'
  kv.hset(`cart-${USER_ID}`, {
    [productId]: 1,
  })
}
