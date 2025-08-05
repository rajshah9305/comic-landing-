import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Gritty Noir Style",
      description: "Dark and atmospheric urban scenes.",
      imageUrl: "/gritty-noir-comic.png",
    },
    {
      title: "Vibrant Sci-Fi",
      description: "Futuristic landscapes with bright colors.",
      imageUrl: "/vibrant-sci-fi-comic.png",
    },
    {
      title: "Classic Superhero",
      description: "Dynamic poses and bold lines.",
      imageUrl: "/classic-superhero-comic.png",
    },
    {
      title: "Fantasy Realm",
      description: "Mythical creatures and enchanted forests.",
      imageUrl: "/fantasy-comic-realm.png",
    },
    {
      title: "Manga Inspired",
      description: "Expressive characters and action sequences.",
      imageUrl: "/manga-comic-art.png",
    },
    {
      title: "Abstract Expression",
      description: "Unique and experimental artistic approaches.",
      imageUrl: "/abstract-comic-art.png",
    },
  ]

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Interactive Gallery</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore diverse artistic styles and themes from our collection.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-gray-950 text-white border-gray-800 hover:border-primary transition-colors">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover w-full aspect-[4/3]"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
