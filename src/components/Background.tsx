import Triangulo from '@/components/Triangulo'
import React from 'react'

export default function Background() {
  return (
    <>
      <Triangulo className="right-2 border-r-red-300 border-l-red-300 z-50"/>
      <Triangulo className="right-14 border-r-blue-300 border-l-blue-300 z-40"/>
      <Triangulo className="right-28 border-r-green-300 border-l-blue-300 z-30"/>
      <Triangulo className="right-40 border-r-gray-300 border-l-blue-300 z-20"/>
      <Triangulo className="right-52 border-r-yellow-300 border-l-blue-300 z-10"/>
      <Triangulo className="right-[19rem] border-r-black border-l-blue-300 "/>
      <Triangulo className="right-64 border-r-purple-300 border-l-blue-300 z-0"/>
    </>
  )
}
