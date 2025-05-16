import CardBlog from '@/components/CardBlog'
import React from 'react'
type GridProps = {
  title: string
}
export default function Grid({title}: GridProps) {
  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <h3 className='font-bold text-2xl'>{title}</h3>

      <div className='grid grid-cols-3 justify-center w-fit items-center gap-8 '>
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
