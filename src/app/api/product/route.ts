import { createProduct } from "@/core/product/productService";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await createProduct(data, "f5c45a97-fb84-48e9-ab63-9008f148325a");
    return new Response("Product created", { status: 201 });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
