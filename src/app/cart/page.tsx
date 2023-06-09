import { USER_ID } from "@/lib/db/constants";
import { kv } from "@vercel/kv";
import Image from "next/image";

export default async function Cart() {
  const totalProducts = await kv.llen(USER_ID);
  const rawCart = await kv.lrange(USER_ID, 0, totalProducts);
  const cart = rawCart.map((product) => JSON.parse(JSON.stringify(product)));

  return (
    <section className="bg-white max-w-3xl rounded-sm">
      <div className="py-3 px-2">
        <h1>Productos</h1>
      </div>
      <div className="h-[1px] bg-gray-300 m-0 w-full"></div>
      <div>
        <ul>
          {cart.map((cartElement) => {
            return (
              <li key={cartElement.product.id}>
                <article className="flex justify-between gap-8 py-6 px-2">
                  <div className="flex flex-shrink-0  justify-center items-center gap-4">
                    <div>
                      <Image
                        src={cartElement.product.image}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div>
                      <header className="py-4">
                        <p className="text-sm font-bold">
                          {cartElement.product.title}
                        </p>
                        <p className="text-xs">2 Plazas</p>
                      </header>
                      <footer className="flex gap-4 text-xs  font-semibold text-[#3483fa]">
                        <button>Eliminar</button>
                        <button>Modificar</button>
                        <button>Comprar Ahora</button>
                      </footer>
                    </div>
                  </div>
                  <div className="flex w-full  justify-around items-center">
                    <div className="flex justify-between py-1 px-2 items-center border w-24 text-md">
                      <button>-</button>
                      <p className="text-sm font-bold">1</p>
                      <button>+</button>
                    </div>
                    <p>{`$ ${Number(
                      cartElement.product.price
                    ).toLocaleString()}`}</p>
                  </div>
                </article>
                <div className="h-[1px] bg-gray-300 m-0 w-full"></div>
              </li>
            );
          })}
          awww
        </ul>
      </div>
      <div></div>
    </section>
  );
}
