import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <Image
        src="/comic-hero-landscape.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="container px-4 md:px-6 relative z-10 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
            Unleash Your Imagination
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-base xl:text-xl">
            Dive into a universe of captivating stories, breathtaking art, and iconic characters. Explore the boundless
            creativity of comic books.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="#gallery">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Gallery
              </Button>
            </Link>
            <Link href="#blog">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
