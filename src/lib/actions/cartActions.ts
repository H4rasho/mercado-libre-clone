'use server'

import {IProduct} from '@/app/product/types/product'
import {USER_ID} from '@/lib/db/constants'
import {kv} from '@vercel/kv'

export async function removeItemFromCart(productId: IProduct['id']) {
  kv.hdel(`cart-${USER_ID}`, productId)
}

export async function addItemToCart(productId: IProduct['id']) {
  kv.hset(`cart-${USER_ID}`, {
    [productId]: 1,
  })
}
