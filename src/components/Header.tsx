import Image from "next/image";
import logo from "../../public/logo.png";
import disneyPromo from "../../public/disney-promo.webp";
import { LocationIcon } from "./icons/LocationIcon";
import { Nav } from "./Nav";
import { ShoppingCarIcon } from "./icons/ShoppingIcon";

export function Header() {
  return (
    <header className="flex font-light text-sm flex-col items-center bg-[#fff159] w-full p-2">
      <section className="flex justify-between max-w-screen-xl w-full">
        <div className="flex flex-col gap-2">
          <Image src={logo} width={134} height={34} alt="Mercado Libre logo" />
          <button className="text-sm flex text-gray-600 font-light gap-1">
            <LocationIcon />
            <div className="flex flex-col">
              <span>Ingresa tu</span>
              <span className="font-medium">ubicación</span>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <input
            className="py-2 px-4 w-full rounded-s font-light shadow-sm shadow-gray-300"
            placeholder="Buscar productos, marcas y más..."
          />
          <Nav />
        </div>
        <div className="flex flex-col gap-4 font-normal">
          <Image
            src={disneyPromo}
            width={340}
            height={39}
            alt="promo Mercado Libre x Disney Plus"
          />
          <ul className="flex justify-end gap-4">
            <li>
              <a href="#">Crea tu Cuenta</a>
            </li>
            <li>
              <a href="#">Ingresa</a>
            </li>
            <li>
              <a href="#">Mis Compras</a>
            </li>
            <li>
              <ShoppingCarIcon />
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}
