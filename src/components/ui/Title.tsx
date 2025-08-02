import { cn } from '@/lib/utils'
import React from 'react'

export default function Title({ children, className }: { children: React.ReactNode | string, className?: string }) {
  return (
    <h1 className={cn(`text-4xl font-bold py-8 ${className}`, )}>
      {children}
    </h1>
  )
}
