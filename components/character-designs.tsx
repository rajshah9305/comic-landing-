import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const characterDesigns = [
  { id: 1, name: "Aetheria, The Starweaver", src: "/female-sci-fi-character.png", alt: "Aetheria character design" },
  { id: 2, name: "Grimfang, The Barbarian", src: "/male-fantasy-barbarian.png", alt: "Grimfang character design" },
  { id: 3, name: "Unit 734 (Android)", src: "/robot-character.png", alt: "Unit 734 character design" },
  { id: 4, name: "Sylvan Sorceress", src: "/forest-sorceress.png", alt: "Sylvan Sorceress character design" },
]

export function CharacterDesigns() {
  return (
    <section id="characters" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Dynamic Character Designs</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the heroes, villains, and allies that populate our comic universes, brought to life through intricate
              designs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {characterDesigns.map((character) => (
            <Card key={character.id} className="bg-gray-800 border-gray-700 hover:border-primary transition-colors">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Image
                  src={character.src || "/placeholder.svg"}
                  alt={character.alt}
                  width={500}
                  height={500}
                  className="aspect-square object-cover rounded-full overflow-hidden border border-gray-700"
                />
                <h3 className="mt-4 text-lg font-semibold text-white text-center">{character.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
