import {Header} from '@/components/Header'
import Image from 'next/image'
import {Montserrat} from 'next/font/google'
import './globals.css'

import banner from '../../public/banner.webp'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
  title: 'Mercado Libre',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className}  bg-[#ebebeb] min-h-screen w-screen`}
      >
        <Header />
        <main className="flex m-auto gap-y-4 flex-col max-w-[1280px] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
