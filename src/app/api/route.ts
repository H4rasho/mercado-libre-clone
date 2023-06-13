import { createProduct } from "@/core/product/productService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const product = (await request.json()) as any;
    const createdProduct = await createProduct(product);
    return NextResponse.json({ product: createdProduct }, { status: 201 });
  } catch (error) {
    console.log(String(error));
    return NextResponse.json({ error }, { status: 500 });
  }
}
