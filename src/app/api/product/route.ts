import { createProduct } from "@/app/product/service/productService";
import { USER_ID } from "@/lib/db/constants";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await createProduct(data, USER_ID);
    return new Response("Product created", { status: 201 });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
