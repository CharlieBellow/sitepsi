import Triangulo from "@/components/Triangulo"

export default function Background() {
  return (
    <div className="relative left-[16rem] w-content h-[24rem] items-center flex -top-20 opacity-20 md:opacity-100">
      <Triangulo className="-right-9 border-r-primary   z-50" />
      <Triangulo className="-right-24 border-r-fundo   z-50" />
      <Triangulo className="right-7 border-r-ciano-1 z-40" />
      <Triangulo className="right-24 border-r-ciano-2  z-30" />
      <Triangulo className="right-40 border-r-ciano-3  z-20" />
      <Triangulo className="right-56 border-r-ciano-4 z-10" />
      <Triangulo className="right-[22rem] border-r-ciano-6 " />
      <Triangulo className="right-72 border-r-ciano-5 z-0" />
    </div>
  )
}