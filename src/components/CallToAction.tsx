import React from 'react'

export default function CallToAction() {
  return (
    <div className=' px-8 retative text-white space-y-20 absolute z-90'>
      <div>
      <h1 className='text-2xl font-bold'>Charlie Bellow de Oliveira Pimentel Silva</h1>
      <h2 className='text-xl font-bold'>Psicólogo - CRP 15/5997</h2>
      </div>
      <p>
      Loren Ypsilum Loren Ypsilum Loren Ypsilum Loren Ypsilum Loren Ypsilum
      </p>

      <div className='flex justify-around w-full'>
        <button type="button" className='bg-transparent hover:bg-ciano-4/25 border-2 py-2 px-10 rounded-xl border-primary'>Agende</button>
        <button type="button" className='bg-primary/30 hover:bg-ciano-4/25 border-2 py-2 px-10 rounded-xl border-primary'>Youtube</button>
      </div>
    </div>
  )
}
