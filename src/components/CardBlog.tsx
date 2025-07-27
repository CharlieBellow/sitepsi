import React, { ReactNode } from 'react'
type CardBlogProps = {
  title: string,
  children?: ReactNode
  description: string

}
export default function CardBlog({children, description, title}: CardBlogProps ) {
  return (
    <div className='relative w-[26rem] h-44'>
      <div className='bg-ciano-4/20 shadow-lg w-96 absolute rounded-sm h-36 left-4 top-2'></div>
      <div className='bg-ciano-4/20 shadow-lg w-96 absolute rounded-sm h-36 left-2 top-4'></div>
      <div className='bg-ciano-4/20 shadow-lg w-96 absolute rounded-sm h-36 left-6 top-0 space-y-2 p-6'>
         <h2 className="text-2xl font-bold truncate ">{title}</h2>
            <p className=" w-80  line-clamp-3 ">
            {description}
        </p>
        <>
        {children}
        </>
      </div>
    </div>
  )
}
