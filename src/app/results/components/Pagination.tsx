import {ChevronLeftIcon} from '@/components/icons/ChevronLeftIcon'
import {ChevronRightIcon} from '@/components/icons/ChevronRightIcon'
import Link from 'next/link'

export function Pagination({
  currentPage,
  totalPages,
  query,
}: {
  currentPage: number
  totalPages: number
  query: string
}) {
  return (
    <div className="flex items-center  mt-4 w-80 justify-around m-auto">
      <Link
        href={`results?query=${query}&page=${currentPage - 1}`}
        className="flex items-center gap-1 bg-gray-100 rounded-md text-[#3483fa]"
      >
        <span>
          <ChevronLeftIcon className="w-4" />
        </span>
        Anterior
      </Link>
      <div className="flex items-center gap-2 text-[#737373]">
        <p className=" bg-[#e4e4e4] py-2 px-3 rounded-sm">{currentPage}</p>
        <p>
          <span> de </span>
          {totalPages}
        </p>
      </div>
      <Link
        className="flex items-center gap-1 bg-gray-100  rounded-md text-[#3483fa]"
        href={`results?query=${query}&page=${currentPage + 1}`}
      >
        Siguiente
        <span>
          <ChevronRightIcon className="w-4" />
        </span>
      </Link>
    </div>
  )
}
