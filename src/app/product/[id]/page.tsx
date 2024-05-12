import { ProductRating } from "@/app/product/components/ProductRating";
import { searchById } from "../service/search";
import { addItemToCart } from "@/lib/actions/cartActions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProductGalery } from "../components/ProductGalery";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await searchById(id);

  return (
    <div className="bg-white  p-4">
      {product && (
        <>
          <div className="flex justify-between">
            <section className="max-w-[821px]">
              <ProductGalery
                images={product.pictures?.map((img) => ({
                  src: img,
                  alt: product.description,
                }))}
              />
              <h3 className="text-2xl pb-6 mt-11">Descripción</h3>
              <p className="text-paragraph text-xl">{product.description}</p>
            </section>
            <section className="flex flex-col gap-y-2 p-4 border rounded-md max-w-[350px]">
              <h1 className="text-xl font-medium">{product.title}</h1>
              <ProductRating rating={Number(product.stars)} />
              <p className="text-3xl ">{`$ ${Number(
                product.price,
              ).toLocaleString()}`}</p>
              <p>
                en
                <span className="text-green-500 font-semibold ml-1">
                  6x $5-665 sin interés
                </span>
              </p>
              <div className="flex flex-col gap-2">
                <button className="py-3 px-6 bg-[#3483fa] font-semibold text-sm text-white rounded-md">
                  Comprar ahora
                </button>
                <form>
                  <button
                    formAction={async () => {
                      "use server";
                      await addItemToCart(product.id);
                      revalidatePath("/cart");
                      redirect("/cart");
                    }}
                    className="w-full py-3 px-6 bg-[#E3EDFB] text-sm font-semibold rounded-md text-[#3483fa]"
                  >
                    Agregar al carrito
                  </button>
                </form>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
