import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const conceptArt = [
  { id: 1, title: "Futuristic Cityscape", src: "/futuristic-city-concept.png", alt: "Futuristic Cityscape concept art" },
  { id: 2, title: "Ancient Temple Ruins", src: "/ancient-temple-ruins.png", alt: "Ancient Temple Ruins concept art" },
  { id: 3, title: "Alien Flora & Fauna", src: "/alien-ecosystem-concept.png", alt: "Alien Flora & Fauna concept art" },
  { id: 4, title: "Hero's Hideout", src: "/placeholder.svg?height=600&width=800", alt: "Hero's Hideout concept art" },
]

export function ConceptArt() {
  return (
    <section id="concept-art" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Behind The Scenes: Concept Art
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Delve into the initial artistic visions that shape our worlds and characters, from rough sketches to
              detailed environments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {conceptArt.map((art) => (
            <Card key={art.id} className="bg-gray-800 border-gray-700 hover:border-primary transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Image
                  src={art.src || "/placeholder.svg"}
                  alt={art.alt}
                  width={800}
                  height={600}
                  className="aspect-[4/3] object-cover rounded-lg overflow-hidden border border-gray-700"
                />
                <h3 className="mt-4 text-lg font-semibold text-white text-center">{art.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
