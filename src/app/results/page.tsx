import {search} from '../product/service/search'
import {OrderPicker} from './components/OrderPicker'
import {Pagination} from './components/Pagination'
import {SearchResults} from './components/SearchResults'

export default async function Page({
  searchParams,
}: {
  searchParams: {query: string; page: number}
}) {
  const results = await search({
    query: searchParams.query,
    page: searchParams.page,
  })
  return (
    results.results.length > 0 && (
      <section className="flex flex-col max-w-4xl mx-auto mt-16 gap-5">
        <OrderPicker />
        <SearchResults results={results.results} />
        <Pagination
          query={searchParams.query}
          currentPage={results.info.currentPage}
          totalPages={results.info.totalPages}
        ></Pagination>
      </section>
    )
  )
}
