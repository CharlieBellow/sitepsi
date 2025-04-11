import Triangulo from '@/components/Triangulo'
import React from 'react'

export default function Background() {
  return (
    <div className='relative left-[12rem] w-content h-[28rem] items-center flex  '>
      <Triangulo className="right-2 border-r-primary   z-50"/>
      <Triangulo className="-right-8 border-r-fundo   z-50"/>
      <Triangulo className="right-14 border-r-ciano-1 z-40"/>
      <Triangulo className="right-[101px] border-r-ciano-2  z-30"/>
      <Triangulo className="right-36 border-r-ciano-3  z-20"/>
      <Triangulo className="right-48 border-r-ciano-4 z-10"/>
      <Triangulo className="right-[18rem] border-r-ciano-6 "/>
      <Triangulo className="right-60 border-r-ciano-5 z-0"/>
    </div>
  )
}
