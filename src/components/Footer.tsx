import logo from "../../assets/logo-charlie-certa-preta.png"
import Image from "next/image"
import {navLinks} from "./Header"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="bg-ciano-3 flex flex-col md:flex-row items-center justify-around p-4">
      <div className="">
      <Image
        src={logo}
        alt="Logomarca de Charlie"
        width={120}
        height={120}
        className="p-2"
        />
      <div>
        Charlie Bellow de Oliveira Pimentel Silva Psicólogo CRP 15/5997
      </div>
        <span>2025 - Todos os direitos reservados</span>
      </div>
      <div>
         <nav className="hidden md:block">
        <ul className="flex flex-col gap-2 text-lg font-regular">
          {navLinks.map((link) => (
            <li key={link.href} className="cursor-pointer hover:text-primary">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </div>
  )
}
