"use client";

import {useSearchParams} from "next/navigation";
import {ShoppingCarIcon} from "./icons/ShoppingIcon";
import {useEffect, useState} from "react";

export default function UserOptions() {
  const [user, setUser] = useState(null);
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  useEffect(() => {
    if (uid && token) {
      fetch(`/api/user?uid=${uid}&token=${token}`, {})
        .then((res) => {
          res.json().then((data) => {
            console.log({data});
            setUser(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [uid, token]);


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
        <ShoppingCarIcon />
      </li>
    </ul>
  );
}
