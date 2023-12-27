'use client'

import {useRouter, useSearchParams} from 'next/navigation'

export function Search() {
  const router = useRouter()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = event.currentTarget.search.value
    event.currentTarget.reset()
    router.push(`/results?query=${value}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name="search"
        className="py-2 px-4 w-full rounded-s font-light shadow-sm shadow-gray-300"
        placeholder="Buscar productos, marcas y más..."
      />
    </form>
  )
}
