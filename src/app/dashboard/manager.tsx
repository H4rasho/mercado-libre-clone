"use client";

import { DashboardForm } from "./form";
import { Prisma } from "@prisma/client";

export function DashboardManager() {
  const handleCreateProduct = async (
    data: Prisma.ProductCreateWithoutSellerInput
  ) => {
    await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return <DashboardForm onSubmit={(data) => handleCreateProduct(data)} />;
}
