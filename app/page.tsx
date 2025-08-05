import Header from "@/components/header"
import Footer from "@/components/footer"
import ComicCard from "@/components/comic-card"
import BlogPostCard from "@/components/blog-post-card"
import GallerySection from "@/components/gallery-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Unleash Your Imagination</h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Explore a universe of captivating comic book designs, character art, and concept art.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
              <Link href="#covers">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explore Comics</Button>
              </Link>
              <Link href="#blog">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                >
                  Read Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Comic Covers Section */}
        <section id="covers" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Comic Book Covers</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover a collection of stunning comic book covers, each telling a unique story.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              <ComicCard title="Cosmic Chronicles" description="Issue #1" imageUrl="/cosmic-chronicles-cover.png" />
              <ComicCard title="Shadow Realm" description="Volume 3" imageUrl="/comic-book-shadow-realm.png" />
              <ComicCard title="Cyberpunk City" description="The Awakening" imageUrl="/cyberpunk-city-comic-cover.png" />
              <ComicCard title="Mystic Guardians" description="Origins" imageUrl="/mystic-guardians-comic-cover.png" />
            </div>
          </div>
        </section>

        {/* Character Designs Section */}
        <section id="characters" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Character Designs</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the heroes and villains brought to life through intricate character designs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              <ComicCard
                title="Aetheria"
                description="Heroine Concept"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
              <ComicCard
                title="Void Knight"
                description="Villain Sketch"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
              <ComicCard
                title="The Oracle"
                description="Early Design"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
              <ComicCard
                title="Mech Warrior"
                description="Armor Study"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
            </div>
          </div>
        </section>

        {/* Concept Art Section */}
        <section id="concept-art" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Concept Art</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive into the imaginative worlds with captivating concept art.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
              <ComicCard
                title="Floating City"
                description="Skyline Concept"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
              <ComicCard
                title="Ancient Ruins"
                description="Jungle Discovery"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
              <ComicCard
                title="Alien Landscape"
                description="Distant Planet"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
              <ComicCard
                title="Magical Forest"
                description="Enchanted Glade"
                imageUrl="/placeholder.svg?height=400&width=300"
              />
            </div>
          </div>
        </section>

        {/* Interactive Gallery Section */}
        <GallerySection />

        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">From the Blog</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights into the creative process, artist spotlights, and news.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <BlogPostCard
                title="The Art of Storytelling Through Panels"
                description="Explore how comic artists weave narratives with visual sequences."
                date="July 28, 2025"
                imageUrl="/placeholder.svg?height=200&width=350"
              />
              <BlogPostCard
                title="Behind the Scenes: Character Development"
                description="A deep dive into bringing iconic characters to life from sketch to final design."
                date="July 20, 2025"
                imageUrl="/placeholder.svg?height=200&width=350"
              />
              <BlogPostCard
                title="New Releases and Upcoming Events"
                description="Stay updated with the latest comic book releases and conventions."
                date="July 15, 2025"
                imageUrl="/placeholder.svg?height=200&width=350"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
