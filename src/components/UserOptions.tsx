import Link from "next/link";
import {ShoppingCarIcon} from "./icons/ShoppingIcon";

export default function UserOptions() {

  return (
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
        <Link href="/cart">
          <ShoppingCarIcon />
        </Link>
      </li>
    </ul>
  );
}
