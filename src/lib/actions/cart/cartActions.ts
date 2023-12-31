'use server'

import {IProduct} from '@/app/product/types/product'
import {USER_ID} from '@/lib/db/constants'
import {kv} from '@vercel/kv'

export const removeItem = async (productId: IProduct['id']) => {
  'use server'
  const response = kv.hdel(`cart-${USER_ID}`, productId)
}
