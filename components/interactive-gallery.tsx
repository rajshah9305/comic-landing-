"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const galleryItems = [
  {
    id: 1,
    title: "Gritty Noir",
    description: "Dark shadows and sharp lines define this detective tale.",
    src: "/placeholder.svg?height=450&width=800",
    alt: "Gritty Noir art style",
  },
  {
    id: 2,
    title: "Vibrant Sci-Fi",
    description: "Explosive colors and futuristic landscapes.",
    src: "/placeholder.svg?height=450&width=800",
    alt: "Vibrant Sci-Fi art style",
  },
  {
    id: 3,
    title: "Classic Fantasy",
    description: "Detailed rendering of mythical creatures and ancient magic.",
    src: "/placeholder.svg?height=450&width=800",
    alt: "Classic Fantasy art style",
  },
  {
    id: 4,
    title: "Minimalist Pop Art",
    description: "Bold colors and simplified forms for maximum impact.",
    src: "/placeholder.svg?height=450&width=800",
    alt: "Minimalist Pop Art comic style",
  },
]

export function InteractiveGallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Explore Artistic Styles</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Immerse yourself in our interactive gallery, showcasing a variety of art styles and thematic approaches.
            </p>
          </div>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        width={800}
                        height={450}
                        className="rounded-lg object-cover w-full aspect-video border border-gray-700"
                      />
                      <h3 className="text-2xl font-bold text-white text-center">{item.title}</h3>
                      <p className="text-gray-300 text-center max-w-md">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-foreground bg-primary hover:bg-primary/90" />
          <CarouselNext className="text-primary-foreground bg-primary hover:bg-primary/90" />
        </Carousel>
      </div>
    </section>
  )
}
