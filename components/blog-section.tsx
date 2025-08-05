import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Visual Storytelling in Comics",
    date: "July 28, 2025",
    excerpt: "Explore how artists use panels, layouts, and colors to convey narratives without words.",
    src: "/placeholder.svg?height=200&width=300",
    alt: "Comic art storytelling",
  },
  {
    id: 2,
    title: "Behind the Panels: Creating a New Character",
    date: "July 15, 2025",
    excerpt: "A deep dive into the process of conceptualizing, designing, and bringing a new character to life.",
    src: "/placeholder.svg?height=200&width=300",
    alt: "Character design process",
  },
  {
    id: 3,
    title: "The Evolution of Comic Book Genres",
    date: "July 1, 2025",
    excerpt: "From golden age superheroes to modern indie comics, tracing the genre's diverse journey.",
    src: "/placeholder.svg?height=200&width=300",
    alt: "Comic genre evolution",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Insights from the ComicVerse Blog
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with articles, interviews, and behind-the-scenes looks at the world of comic creation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gray-800 border-gray-700 hover:border-primary transition-colors">
              <CardContent className="flex flex-col p-4">
                <Image
                  src={post.src || "/placeholder.svg"}
                  alt={post.alt}
                  width={300}
                  height={200}
                  className="aspect-video object-cover rounded-md overflow-hidden border border-gray-700 mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{post.date}</p>
                <p className="text-gray-300 text-base flex-1">{post.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
