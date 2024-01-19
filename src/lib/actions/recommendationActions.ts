'use server'
import kv from '@vercel/kv'
import {USER_ID} from '../db/constants'
import {search, searchById} from '@/app/product/service/search'

export async function addRecommendationToLastSearch(query: string) {
  kv.set(USER_ID, query)
}

export async function getRecommendationFromLastSearch() {
  const recommendationQueryList = (await kv.get(USER_ID)) as string
  const results = await search({
    query: recommendationQueryList,
    page: 0,
    limit: 7,
  })
  const products = await Promise.all(
    results.results.map(async result => {
      const product = searchById(result.id)
      return product
    })
  )
  return products
}
