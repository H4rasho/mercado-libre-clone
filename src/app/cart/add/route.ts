import { kv } from "@vercel/kv";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await kv.hset(`cart-${data.userId}`, {
      [data.product.id]: data.quantity
    });
    return new Response("Product added to cart", { status: 201 });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
