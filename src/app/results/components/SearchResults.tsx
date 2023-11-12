"use client";
import { useSearchParams } from "next/navigation";
import { ProductResults } from "./ProductResults";

export function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q");
  return <ProductResults query={query} />;
}
