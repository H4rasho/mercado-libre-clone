"use client";
import { USER_ID } from "@/lib/db/constants";
import { Product } from "@prisma/client";

export function AddToCard({ item }: { item: Product }) {
  const handleAddToCar = async () => {
    try {
      await fetch("/cart/add", {
        method: "POST",
        body: JSON.stringify({
          userId: USER_ID,
          product: {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
          },
        }),
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error al agregar al carrito");
    }
  };

  return (
    <button
      onClick={handleAddToCar}
      className="py-3 px-6 bg-[#E3EDFB] text-sm font-semibold rounded-md text-[#3483fa]"
    >
      Agregar al carrito
    </button>
  );
}
