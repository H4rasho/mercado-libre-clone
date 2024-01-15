import {addRecommendationToLastSearch} from '@/lib/actions/recommendationActions'
import {redirect} from 'next/navigation'

export function Search() {
  const search = async (formData: FormData) => {
    'use server'
    const value = formData.get('search')
    addRecommendationToLastSearch(value as string)
    redirect(`/results?query=${value}`)
  }

  return (
    <form action={search}>
      <input
        name="search"
        className="py-2 px-4 w-full rounded-s font-light shadow-sm shadow-gray-300"
        placeholder="Buscar productos, marcas y más..."
      />
    </form>
  )
}
