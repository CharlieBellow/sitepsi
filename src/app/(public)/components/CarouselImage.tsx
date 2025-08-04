"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



import Image, { StaticImageData } from "next/image"
export default function CarouselImage({ images }: { images: { src: StaticImageData; alt: string }[] }) {
  return (
    <Carousel
      className='w-full max-w-xl mx-auto'
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className=' rounded-lg shadow-md p-12 space-y-4 mb-4 items-center justify-center flex '
          >
            <Image
              className=''
              src={image.src}
              alt={image.alt}
              width={400}
              height={250}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
