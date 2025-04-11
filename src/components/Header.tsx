export default function Header() {
  return (
    <div>
      <ul className="flex w-full p-4 right-10 text-sm font-light z-50  absolute  text-white justify-end items-end space-x-4 ">
        <li className="hover:text-primary cursor-pointer">Início</li>
        <li className="hover:text-primary cursor-pointer">Blog</li>
        <li className="hover:text-primary cursor-pointer">Serviços</li>
        <li className="hover:text-primary cursor-pointer">Sobre mim</li>
        <li className="hover:text-primary cursor-pointer">Contato</li>
      </ul>
    </div>
  )
}
