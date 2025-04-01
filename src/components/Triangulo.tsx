import React from 'react'
type props = {
  className?: string
}
export default function Triangulo({className } : props) {
  return (
    <div className={` absolute border-r-[150px]  border-b-[290px] border-t-[290px] border-transparent ${className}`}>
    </div>
  )
}
