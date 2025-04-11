import CardBlog from '@/components/CardBlog'
import React from 'react'
type GridProps = {
  title: string
}
export default function Grid({title}: GridProps) {
  return (
    <div className='flex flex-col items-center w-full '>
      <h3>{title}</h3>

      <div className='grid grid-cols-3 justify-center w-full items-center'>
<CardBlog/>
<CardBlog/>
<CardBlog/>
<CardBlog/>
<CardBlog/>
<CardBlog/>
      </div>
      
    </div>
  )
}
