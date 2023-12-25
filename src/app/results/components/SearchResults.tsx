import {ProductArticle} from './ProductArticle'

export function SearchResults({results}: {results: any[]}) {
  return (
    <section>
      {results.map(product => (
        <ProductArticle key={product.id} product={product} />
      ))}
    </section>
  )
}
