import Image from "next/image"
import logo from "../../assets/logo-charlie-certa-verde.png"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Link from "next/link"

import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre mim" },
  { href: "/contato", label: "Contato" },
]

export default function Header() {
  return (
     <div className="relative z-50 flex items-center justify-between p-4">
      <Link href="/">
        <Image
          src={logo}
          alt="Logomarca de Charlie"
          width={120}
          className="p-2"
        />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-8 text-lg font-light text-white">
          {navLinks.map((link) => (
            <li key={link.href} className="cursor-pointer hover:text-primary">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <FaBars className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mr-4 w-auto border-primary bg-fundo/95 text-white">
            <nav>
              <ul className="flex flex-col gap-4 p-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="cursor-pointer text-lg hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
        </div>
  )
}
