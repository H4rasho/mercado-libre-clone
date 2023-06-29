import { kv } from "@vercel/kv";
export async function POST(req: Request) {
  try {
    const data = await req.json();
    await kv.lpush(data.userId, data);
    return new Response("Product added to cart", { status: 201 });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
