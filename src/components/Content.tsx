import Grid from '@/components/Grid'
import React from 'react'

export default function Content() {
  return (
    <main className='space-y-8 pt-8'>
      <Grid title="Blog" />
      {/* esse component vai receber um children: react node pra poder passar card de blog e de videos */}
      <Grid title="Videos"/>
    </main>
  )
}
