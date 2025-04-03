import Triangulo from '@/components/Triangulo'
import React from 'react'

export default function Background() {
  return (
    <div className='relative -right-[24rem] h-60 items-center flex'>
      <Triangulo className="right-2 bg-red-300 bor  z-50"/>
      <Triangulo className="-right-8 bg-red-500 bor  z-50"/>
      <Triangulo className="right-14 bg-blue-300 z-40"/>
      <Triangulo className="right-28 bg-green-300  z-30"/>
      <Triangulo className="right-40 bg-gray-300  z-20"/>
      <Triangulo className="right-52 bg-yellow-300 z-10"/>
      <Triangulo className="right-[19rem] bg-black "/>
      <Triangulo className="right-64 bg-purple-300 z-0"/>
    </div>
  )
}
