'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const onPageChange = (page: number) => {
    router.replace(`${pathname}?query=${query}&page=${page}`)
  }

  return (
    <div className="flex justify-center gap-3">
      <button
        className="bg-gray-100 px-4 py-2 rounded-md"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <button
        className="bg-gray-100 px-4 py-2 rounded-md"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  )
}
