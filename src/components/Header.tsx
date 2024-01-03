import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/logo.png'
import disneyPromo from '../../public/disney-promo.webp'
import {LocationIcon} from './icons/LocationIcon'
import {Nav} from './Nav'
import UserOptions from './UserOptions'
import {Search} from './Search'

export function Header() {
  return (
    <header className="flex font-light text-sm flex-col items-center bg-[#fff159] w-full p-2">
      <section className="flex justify-between max-w-screen-xl w-full">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image
              src={logo}
              width={134}
              height={34}
              alt="Mercado Libre logo"
            />
          </Link>
          <button className="text-sm flex text-gray-600 font-light gap-1">
            <LocationIcon />
            <div className="flex flex-col">
              <span>Ingresa tu</span>
              <span className="font-medium">ubicación</span>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <Search />
          <Nav />
        </div>
        <div className="flex flex-col gap-4 font-normal">
          <Image
            src={disneyPromo}
            width={340}
            height={39}
            alt="promo Mercado Libre x Disney Plus"
          />
          <UserOptions />
        </div>
      </section>
    </header>
  )
}
