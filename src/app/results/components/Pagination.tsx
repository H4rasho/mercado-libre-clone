'use client'

import {ChevronLeftIcon} from '@/components/icons/ChevronLeftIcon'
import {ChevronRightIcon} from '@/components/icons/ChevronRightIcon'
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
    <div className="flex items-center  mt-4 w-80 justify-around m-auto">
      <button
        className="flex items-center gap-1 bg-gray-100 rounded-md text-[#3483fa]"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <span>
          <ChevronLeftIcon className="w-4" />
        </span>
        Anterior
      </button>
      <div className="flex items-center gap-2 text-[#737373]">
        <p className=" bg-[#e4e4e4] py-2 px-3 rounded-sm">{currentPage}</p>
        <p>
          <span> de </span>
          {totalPages}
        </p>
      </div>
      <button
        className="flex items-center gap-1 bg-gray-100  rounded-md text-[#3483fa]"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
        <span>
          <ChevronRightIcon className="w-4" />
        </span>
      </button>
    </div>
  )
}
