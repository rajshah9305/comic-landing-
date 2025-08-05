import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const comicCovers = [
  { id: 1, title: "Cosmic Guardian #1", src: "/sci-fi-comic-cover.png", alt: "Cosmic Guardian comic cover" },
  { id: 2, title: "The Shadow Blade #5", src: "/dark-fantasy-comic-cover.png", alt: "The Shadow Blade comic cover" },
  { id: 3, title: "Galactic Drifters #9", src: "/space-opera-comic-cover.png", alt: "Galactic Drifters comic cover" },
  { id: 4, title: "Mythic Realms: Elara", src: "/fantasy-comic-cover.png", alt: "Mythic Realms comic cover" },
  {
    id: 5,
    title: "Cyberpunk City Limits",
    src: "/cyberpunk-comic-cover.png",
    alt: "Cyberpunk City Limits comic cover",
  },
  {
    id: 6,
    title: "Ancient Prophecies Vol. 2",
    src: "/placeholder-jwi25.png",
    alt: "Ancient Prophecies comic cover",
  },
]

export function ComicCovers() {
  return (
    <section id="covers" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Iconic Comic Book Covers</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a curated collection of visually striking covers, showcasing diverse artistic styles and genres.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {comicCovers.map((cover) => (
            <Card key={cover.id} className="bg-gray-800 border-gray-700 hover:border-primary transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Image
                  src={cover.src || "/placeholder.svg"}
                  alt={cover.alt}
                  width={300}
                  height={400}
                  className="aspect-[3/4] object-cover rounded-lg overflow-hidden border border-gray-700"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">{cover.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
