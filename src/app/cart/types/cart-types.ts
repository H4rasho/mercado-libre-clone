import {IProduct} from '@/app/product/types/product'

export interface ICartItem {
  product: IProduct
  quantity: number
}
