import {search} from '../product/service/search'
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
    <section className="max-w-4xl mx-auto">
      <SearchResults results={results.results} />
      <Pagination
        query={searchParams.query}
        currentPage={results.info.currentPage}
        totalPages={results.info.totalPages}
      ></Pagination>
    </section>
  )
}
