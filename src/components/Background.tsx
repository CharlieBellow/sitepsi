import Triangulo from '@/components/Triangulo'
import React from 'react'

export default function Background() {
  return (
    <div className='relative left-[8rem] w-content h-[28rem] items-center flex overflow-hidden '>
      <Triangulo className="right-2 border-r-red-300   z-50"/>
      <Triangulo className="-right-8 border-r-red-500   z-50"/>
      <Triangulo className="right-14 border-r-blue-300 z-40"/>
      <Triangulo className="right-24 border-r-green-300  z-30"/>
      <Triangulo className="right-36 border-r-gray-300  z-20"/>
      <Triangulo className="right-48 border-r-yellow-300 z-10"/>
      <Triangulo className="right-[18rem] border-r-black "/>
      <Triangulo className="right-60 border-r-purple-300 z-0"/>
    </div>
  )
}
