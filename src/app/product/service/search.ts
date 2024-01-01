import {type SearchResponse} from '../types/api-response'
import {SearchByIDResponse} from '../types/api-serachById-response'
import {Search, type IProduct} from '../types/product'

const API_URL = 'https://api.mercadolibre.com'

export async function search({
  query,
  page,
}: {
  query: string
  page: number
}): Promise<Search> {
  const response = await fetch(
    `${API_URL}/sites/MLC/search?q=${query}&offset=${page ? page : 0}`
  )
  if (!response.ok) throw new Error('Error fetching products')
  const data: SearchResponse = await response.json()

  const products = data?.results.map(result => ({
    id: result.id,
    name: result.title,
    description: result.title,
    price: result.price,
    stock: 0,
    sellerId: '1',
    image: result.thumbnail,
    stars: 0,
    title: result.title,
    characteristics: [],
    seller: {
      id: String(result.seller.id),
      name: result.seller.nickname,
    },
    originalPrice: 1,
  }))

  return {
    info: {
      currentPage: data.paging.offset,
      totalPages: Math.ceil(data.paging.total / data.paging.limit),
      totalResults: data.paging.total,
    },
    results: products || [],
  }
}

export async function searchById(id: string): Promise<IProduct> {
  const response = await fetch(`${API_URL}/items/${id}`)
  const data = (await response.json()) as SearchByIDResponse
  return {
    id: data.id,
    title: data.title,
    description: data.title,
    price: data.price,
    originalPrice: Number(data.original_price),
    stock: 0,
    sellerId: '1',
    image: data.thumbnail,
    stars: 4,
    seller: {
      id: String(data.seller_id),
      name: String(data.seller_id),
    },
    pictures: data?.pictures?.map(picture => picture.url),
  }
}
