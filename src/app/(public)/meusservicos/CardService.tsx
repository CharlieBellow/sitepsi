"use client"
import Subtitle from "@/src/components/ui/Subtitle"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

type CardServiceProps = {
  title: string
  description: string | ReactNode
  imageSrc: StaticImageData
  altText: string
  priority?: boolean
  fetchPriority?: "high" | "low" | "auto"
}

export default function CardService({ title, description, imageSrc, altText, priority, fetchPriority }: CardServiceProps) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 py-6'>
      <Image src={imageSrc} alt={altText} width={480} height={400} priority={priority} fetchPriority={fetchPriority} />
      <div>
        <Subtitle>{title}</Subtitle>
        <p className='text-justify text-base lg:text-lg'>{description}</p>
      </div>
    </div>
  )
}
