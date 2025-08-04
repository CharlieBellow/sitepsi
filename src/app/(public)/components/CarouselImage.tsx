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
  if (!images || images.length === 0) {
    return <span>Carregando imagens...</span>
  }
  return (
    <Carousel
      className='w-full max-w-xl mx-auto'
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
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
              priority={index === 0}
              quality={75}
              loading={index === 0 ? "eager" : "lazy"}
              
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250"><rect width="100%" height="100%" fill="[ciano-4/50]"/></svg>',
              ).toString("base64")}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
