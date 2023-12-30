"use client";
import { API_URL, USER_ID } from "@/lib/db/constants";
import {IProduct} from "../types/product";

export function AddToCard({ item }: { item: IProduct }) {
  const handleAddToCar = async () => {
    try {
      await fetch(`${API_URL}/cart`, {
        method: "POST",
        body: JSON.stringify({
          userId: USER_ID,
          quantity: 1,
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
