import React from 'react'
type props = {
  className?: string
}
export default function Triangulo({className } : props) {
  return (
    <div className={` rounded-md absolute -top-96 border-r-[380px]  border-b-[760px] border-t-[590px] border-transparent  drop-shadow-2xl 
      ${className}`}></div>

  )
}
