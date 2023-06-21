import { Prisma } from "@prisma/client";
import React from "react";

export interface DashboardFormProps {
  onSubmit: (values: Prisma.ProductCreateWithoutSellerInput) => void;
}

export function DashboardForm({ onSubmit }: DashboardFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());
    const product: Prisma.ProductCreateWithoutSellerInput = {
      title: formEntries.title,
      description: formEntries.description,
      price: Number(formEntries.price),
      stock: Number(formEntries.stock),
      image: formEntries.image,
      characteristics: formEntries.characteristics,
      stars: 0,
    } as Prisma.ProductCreateWithoutSellerInput;

    onSubmit(product);
  };

  return (
    <form
      className="flex flex-col max-w-md bg-white p-8"
      onSubmit={handleSubmit}
    >
      <label> Nombre del producto </label>
      <input type="text" name="title" />
      <label> Descripcion </label>
      <textarea name="description" />
      <label> Precio </label>
      <input type="number" name="price" />
      <label> Cantidad </label>
      <input type="number" name="stock" />
      <label> Imagen </label>
      <input name="image" />
      <label> Caracteristicas </label>
      <textarea name="characteristics" />
      <button>Guardar</button>
    </form>
  );
}
