import { navLinksPublic } from "@/src/lib/constants"
import Image from "next/image"
import logo from "../../assets/logo-charlie-certa-preta.png"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className='bg-ciano-3 flex flex-col md:flex-row p-8 itemns-center justify-around gap-8'>
      <div className=''>
        <Image src={logo} alt='Logomarca de Charlie' width={120} height={120} className='p-2' />
        <div>Charlie Bellow de Oliveira Pimentel Silva Psicólogo CRP 15/5997</div>
        <span>2025 - Todos os direitos reservados</span>
      </div>
      <div>
        <nav className='flex flex-col '>
          <ul className='flex flex-col md:flex-row gap-4 items-center justify-center line-clamp-1 truncate text-lg font-regular'>
            {navLinksPublic.map((link) => (
              <li key={link.href} className='cursor-pointer hover:text-primary'>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
