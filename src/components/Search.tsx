"use client";

import { useRouter } from "next/navigation";

export function Search() {
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();
    const [{ value }] = event.target;
    router.push(`results/${value}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="search"
        className="py-2 px-4 w-full rounded-s font-light shadow-sm shadow-gray-300"
        placeholder="Buscar productos, marcas y más..."
      />
    </form>
  );
}
