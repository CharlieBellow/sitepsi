"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { depoiments } from "../../../../Utils/utilsInformations"
export default function Depoiments() {
  return (
    <Carousel
      className='w-full max-w-3xl mx-auto'
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {depoiments.map((depoiment, index) => (
          <CarouselItem
            key={index}
            className='bg-ciano-5/20 rounded-lg shadow-md p-12 space-y-4 mb-4'
          >
            <p className='font-bold text-base lg:text-lg '>{depoiment.name}</p>
            <p className='text-justify italic text-base lg:text-lg'>{depoiment.text}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
