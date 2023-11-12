import { SearchResults } from "./components/SearchResults";

export default function Results({ params }: { params: { id: string } }) {
  console.log({ id: params.id });
  return (
    <>
      <h1>Results</h1>
      <SearchResults />
    </>
  );
}
