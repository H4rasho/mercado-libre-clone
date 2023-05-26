import { CreditCardBackIcon } from "./icons/CreditCardBackIcon";
import { CreditCardFrontIcon } from "./icons/CreditCardFrontIcon";
import { PlusIcon } from "./icons/PlusIcon";

export function PaymentPromoSection() {
  return (
    <section className="grid w-full shadow-sm  grid-cols-4 px-1 [&>div]:py-4 [&>div]:px-3 rounded-s bg-white justify-items-stretch py-1 place-items-center">
      <div className="border-l-4 border-l-blue-500">
        <p className="">Paga comodo y seguro</p>
        <p className="text-sm ext-gray-500">con Mercado Pago</p>
      </div>
      <div className="flex justify-between col-span-2 border-x border-gray-300">
        <div className="flex justify-center gap-2 items-center">
          <CreditCardFrontIcon />
          <div>
            <p className="">Hasta 12 cuotas sin interes</p>
            <button className="text-xs text-blue-500 font-medium">
              Ver más
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <CreditCardBackIcon />
          <div>
            <p className="">Tarjeta de debito</p>
            <button className="text-xs text-blue-500 font-medium">
              Ver más
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 items-center">
        <PlusIcon />
        <div>
          <p>Mas medio de pago</p>
          <button className="text-xs text-blue-500 font-medium">
            Ver todos
          </button>
        </div>
      </div>
    </section>
  );
}
